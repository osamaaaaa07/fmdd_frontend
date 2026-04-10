<?php

$allowedOrigins = array_values(array_filter(array_map(
    static fn (string $origin): string => trim($origin),
    explode(',', (string) env('CORS_ALLOWED_ORIGINS', 'http://localhost:5173'))
)));

return [

    /*
    |--------------------------------------------------------------------------
    | Cross-Origin Resource Sharing (CORS) Configuration
    |--------------------------------------------------------------------------
    |
    | This backend is prepared for a stateless API consumed by the React
    | frontend. Origins are configured via a comma-separated env variable so
    | local and deployed frontends can be allowed without code changes.
    |
    */

    'paths' => ['api/*'],

    'allowed_methods' => ['*'],

    'allowed_origins' => $allowedOrigins,

    'allowed_origins_patterns' => [],

    'allowed_headers' => ['*'],

    'exposed_headers' => [],

    'max_age' => 0,

    'supports_credentials' => false,
];
