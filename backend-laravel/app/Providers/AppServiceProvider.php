<?php

namespace App\Providers;

use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        RateLimiter::for('login', function (Request $request): Limit {
            $identifier = mb_strtolower((string) (
                $request->input('email')
                ?? $request->input('username')
                ?? $request->input('login')
                ?? 'anonymous'
            ));

            return Limit::perMinute(5)->by($identifier.'|'.$request->ip());
        });

        RateLimiter::for('register', function (Request $request): array {
            $email = mb_strtolower((string) $request->input('email', 'anonymous'));

            return [
                Limit::perMinute(3)->by($request->ip()),
                Limit::perHour(10)->by($email.'|'.$request->ip()),
            ];
        });
    }
}
