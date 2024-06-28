<?php

use App\Http\Controllers\Api\V2\Auth\LoginController;
use App\Http\Controllers\Api\V2\Auth\LogoutController;
use App\Http\Controllers\Api\V2\Auth\RegisterController;
use App\Http\Controllers\Api\V2\MeController;
use App\Http\Controllers\Api\V2\Auth\ForgotPasswordController;
use App\Http\Controllers\Api\V2\Auth\ResetPasswordController;
use App\Http\Controllers\UploadController;
use App\Http\Controllers\ApiController;
use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/index-html', function () {
    return response()->file(public_path('index.html'));
});

Route::get('/contact', function () {
    return response()->file(public_path('contact.html'));
});

Route::get('/portfolio', function () {
    return response()->file(public_path('portfolio.html'));
});

Route::get('/pricing', function () {
    return response()->file(public_path('pricing.html'));
});

Route::get('/services', function () {
    return response()->file(public_path('services.html'));
});

Route::get('/about', function () {
    return response()->file(public_path('about.html'));
});

Route::get('/checkers', function () {
    return response()->file(public_path('checkers.html'));
});

Route::get('/home', function () {
    return response()->file(public_path('home.html'));
});

Route::get('/products', function () {
    return response()->file(public_path('products.html'));
});

Route::get('/support', function () {
    return response()->file(public_path('support.html'));
});

Route::get('/vm-pricing', function () {
    return response()->file(public_path('vm-pricing.html'));
});

Route::get('/web-pricing', function () {
    return response()->file(public_path('web-pricing.html'));
});

Route::get('/wp-pricing', function () {
    return response()->file(public_path('wp-pricing.html'));
});

Route::post('/api/login', [ApiController::class, 'login']);

Route::prefix('v2')->middleware('json.api')->group(function () {
    Route::post('/login', LoginController::class)->name('login');
    Route::post('/register', RegisterController::class);
    Route::post('/logout', LogoutController::class)->middleware('auth:api');
    Route::post('/password-forgot', ForgotPasswordController::class);
    Route::post('/password-reset', ResetPasswordController::class)->name('password.reset');
});

Route::get('me', [MeController::class, 'readProfile']);
Route::patch('me', [MeController::class, 'updateProfile']);
Route::post('/uploads/{resource}/{id}/{field}', UploadController::class);

Route::post('/login', [AuthController::class, 'login'])->name('login');

Route::get('/csrf-token', function () {
    return response()->json(['csrf_token' => csrf_token()]);
});
