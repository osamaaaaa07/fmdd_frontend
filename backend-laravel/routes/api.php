<?php

use App\Http\Middleware\SecurityHeaders;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware(SecurityHeaders::class)->group(function (): void {
    Route::get('/health', function (Request $request) {
        return response()->json([
            'ok' => true,
            'app' => config('app.name'),
            'environment' => config('app.env'),
            'timestamp' => now()->toIso8601String(),
            'request_origin' => $request->headers->get('Origin'),
            'auth_mode' => 'stateless-api-foundation',
            'csrf' => 'not applied to bearer-token APIs; only needed for cookie-based SPA auth',
        ]);
    });
});
