<?php

<<<<<<< HEAD
use Illuminate\Contracts\Http\Kernel;
use Illuminate\Http\Request;

define('LARAVEL_START', microtime(true));

/*
|--------------------------------------------------------------------------
| Check If The Application Is Under Maintenance
|--------------------------------------------------------------------------
|
| If the application is in maintenance / demo mode via the "down" command
| we will load this file so that any pre-rendered content can be shown
| instead of starting the framework, which could cause an exception.
|
*/

if (file_exists($maintenance = __DIR__.'/../storage/framework/maintenance.php')) {
    require $maintenance;
}

/*
|--------------------------------------------------------------------------
| Register The Auto Loader
|--------------------------------------------------------------------------
|
| Composer provides a convenient, automatically generated class loader for
| this application. We just need to utilize it! We'll simply require it
| into the script here so we don't need to manually load our classes.
|
*/

require __DIR__.'/../vendor/autoload.php';

/*
|--------------------------------------------------------------------------
| Run The Application
|--------------------------------------------------------------------------
|
| Once we have the application, we can handle the incoming request using
| the application's HTTP kernel. Then, we will send the response back
| to this client's browser, allowing them to enjoy our application.
|
*/

$app = require_once __DIR__.'/../bootstrap/app.php';

$kernel = $app->make(Kernel::class);

$response = $kernel->handle(
    $request = Request::capture()
)->send();

$kernel->terminate($request, $response);
=======
// Ensure that this file is designed to serve Nuxt.js application
// This should be your Nuxt.js application entry point file

use Illuminate\Contracts\Http\Kernel;
use Illuminate\Http\Request;

define('NUXT_START', microtime(true));

/*
|--------------------------------------------------------------------------
| Handle the request using Nuxt.js
|--------------------------------------------------------------------------
|
| The Nuxt.js application will handle all the routing and rendering.
| Ensure that this script is designed to bootstrap and handle the Nuxt.js app.
|
*/

// Autoload the required files for the Nuxt.js application
// Assuming Nuxt.js does not need to load Laravel's vendor files

// You can require necessary Nuxt.js bootstrap or entry files here

// Example placeholder content to ensure the file is functional
echo "Nuxt.js application is being served.";
>>>>>>> fa1b553df294114a664ad6f03014dbdffa27560f
