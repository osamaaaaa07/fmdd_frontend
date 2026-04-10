<?php

namespace Tests\Feature;

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
                "default-src 'none'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'"
            );
    }
}
