<?php

use App\Http\Controllers\Api\V2\Auth\LoginController;
use App\Http\Controllers\Api\V2\Auth\LogoutController;
use App\Http\Controllers\Api\V2\Auth\RegisterController;
use App\Http\Controllers\Api\V2\MeController;
use Illuminate\Support\Facades\Route;
use LaravelJsonApi\Laravel\Facades\JsonApiRoute;
use LaravelJsonApi\Laravel\Http\Controllers\JsonApiController;
use LaravelJsonApi\Laravel\Routing\ResourceRegistrar;
use App\Http\Controllers\Api\V2\Auth\ForgotPasswordController;
use App\Http\Controllers\Api\V2\Auth\ResetPasswordController;
use App\Http\Controllers\UploadController;

Route::prefix('v2')->middleware('json.api')->group(function () {
    Route::post('/login', [LoginController::class, 'store'])->name('api.login');
    Route::post('/register', [RegisterController::class, 'store'])->name('api.register');
    Route::post('/logout', [LogoutController::class, 'store'])->middleware('auth:api')->name('api.logout');
    Route::post('/password-forgot', [ForgotPasswordController::class, 'store'])->name('api.password.forgot');
    Route::post('/password-reset', [ResetPasswordController::class, 'store'])->name('api.password.reset');
});

JsonApiRoute::server('v2')->prefix('v2')->resources(function (ResourceRegistrar $server) {
    $server->resource('categories', JsonApiController::class);
    $server->resource('items', JsonApiController::class);
    $server->resource('permissions', JsonApiController::class)->only('index');
    $server->resource('roles', JsonApiController::class);
    $server->resource('tags', JsonApiController::class);
    $server->resource('users', JsonApiController::class);
    Route::get('me', [MeController::class, 'readProfile'])->name('api.me.read');
    Route::patch('me', [MeController::class, 'updateProfile'])->name('api.me.update');
    Route::post('/uploads/{resource}/{id}/{field}', [UploadController::class, 'store'])->name('api.uploads.store');
});
