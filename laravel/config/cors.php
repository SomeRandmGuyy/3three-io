<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Laravel CORS Options
    |--------------------------------------------------------------------------
    |
    | The paths option is used to match the URL where the CORS policy should
    | be applied. If you want to apply CORS globally, just use `*`.
    |
    */
    'paths' => ['api/*', 'sanctum/csrf-cookie', 'v2/*'],

    /*
    |--------------------------------------------------------------------------
    | Allowed HTTP Methods
    |--------------------------------------------------------------------------
    |
    | The allowed methods option defines which HTTP methods are allowed.
    | You can use `*` to allow all methods.
    |
    */
    'allowed_methods' => ['*'],

    /*
    |--------------------------------------------------------------------------
    | Allowed Origins
    |--------------------------------------------------------------------------
    |
    | The allowed origins option defines which origins are allowed to
    | perform requests to your application. Use `*` to allow all origins.
    |
    */
    'allowed_origins' => ['http://localhost:3001', 'http://localhost:3002'],

    /*
    |--------------------------------------------------------------------------
    | Allowed Origins Patterns
    |--------------------------------------------------------------------------
    |
    | The allowed origins patterns option is used to allow requests from
    | origins that match a given regular expression pattern.
    |
    */
    'allowed_origins_patterns' => [],

    /*
    |--------------------------------------------------------------------------
    | Allowed Headers
    |--------------------------------------------------------------------------
    |
    | The allowed headers option defines which headers are allowed.
    | You can use `*` to allow all headers.
    |
    */
    'allowed_headers' => ['*'],

    /*
    |--------------------------------------------------------------------------
    | Exposed Headers
    |--------------------------------------------------------------------------
    |
    | The exposed headers option defines which headers should be made
    | accessible to the client.
    |
    */
    'exposed_headers' => [],

    /*
    |--------------------------------------------------------------------------
    | Max Age
    |--------------------------------------------------------------------------
    |
    | The max age option defines how long the results of a preflight request
    | can be cached.
    |
    */
    'max_age' => 0,

    /*
    |--------------------------------------------------------------------------
    | Supports Credentials
    |--------------------------------------------------------------------------
    |
    | The supports credentials option defines whether the response to the
    | request can be exposed when the credentials flag is true.
    |
    */
    'supports_credentials' => true,

];
