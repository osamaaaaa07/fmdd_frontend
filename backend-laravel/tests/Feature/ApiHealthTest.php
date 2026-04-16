<?php

namespace Tests\Feature;

use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\RateLimiter;
use Tests\TestCase;

class ApiHealthTest extends TestCase
{
    public function test_api_health_endpoint_returns_expected_payload_and_headers(): void
    {
        $response = $this->getJson('/api/health');

        $response
            ->assertOk()
            ->assertJsonPath('ok', true)
            ->assertJsonPath('auth_mode', 'stateless-api-foundation')
            ->assertHeader('X-Content-Type-Options', 'nosniff')
            ->assertHeader('X-Frame-Options', 'DENY')
            ->assertHeader('Referrer-Policy', 'no-referrer')
            ->assertHeader(
                'Content-Security-Policy',
                "default-src 'none'; base-uri 'none'; frame-ancestors 'none'; form-action 'none'; object-src 'none'; script-src 'none'; style-src 'none'; img-src 'none'; font-src 'none'; connect-src 'self'; frame-src 'none'; child-src 'none'; manifest-src 'none'; media-src 'none'; worker-src 'none'"
            );
    }

    public function test_api_group_routes_inherit_security_headers_from_the_api_middleware_stack(): void
    {
        Route::middleware('api')->get('/api/security-test', function () {
            return response()->json(['ok' => true]);
        });

        $response = $this->getJson('/api/security-test');

        $response
            ->assertOk()
            ->assertHeader('X-Content-Type-Options', 'nosniff')
            ->assertHeader('X-Frame-Options', 'DENY')
            ->assertHeader('Referrer-Policy', 'no-referrer')
            ->assertHeader(
                'Content-Security-Policy',
                "default-src 'none'; base-uri 'none'; frame-ancestors 'none'; form-action 'none'; object-src 'none'; script-src 'none'; style-src 'none'; img-src 'none'; font-src 'none'; connect-src 'self'; frame-src 'none'; child-src 'none'; manifest-src 'none'; media-src 'none'; worker-src 'none'"
            );
    }

    public function test_named_auth_rate_limiters_are_registered_for_future_api_routes(): void
    {
        $loginLimiter = RateLimiter::limiter('login');
        $registerLimiter = RateLimiter::limiter('register');

        $this->assertNotNull($loginLimiter);
        $this->assertNotNull($registerLimiter);

        $loginLimit = $loginLimiter(Request::create('/api/login', 'POST', [
            'email' => '[email protected]',
        ]));
        $registerLimits = $registerLimiter(Request::create('/api/register', 'POST', [
            'email' => '[email protected]',
        ]));

        $this->assertInstanceOf(Limit::class, $loginLimit);
        $this->assertIsArray($registerLimits);
        $this->assertCount(2, $registerLimits);
        $this->assertContainsOnlyInstancesOf(Limit::class, $registerLimits);
    }
}
