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
use LaravelJsonApi\Laravel\Http\Controllers\JsonApiController;
use LaravelJsonApi\Laravel\Routing\ResourceRegistrar;
use LaravelJsonApi\Laravel\Facades\JsonApiRoute;

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

// Routes for nuxt.3three.io
Route::prefix('nuxt')->group(function () {
    Route::get('/index-html', function () {
        return response()->file(public_path('nuxt/index.html'));
    });

    Route::get('/contact', function () {
        return response()->file(public_path('nuxt/contact.html'));
    });

    Route::get('/portfolio', function () {
        return response()->file(public_path('nuxt/portfolio.html'));
    });

    Route::get('/pricing', function () {
        return response()->file(public_path('nuxt/pricing.html'));
    });

    Route::get('/services', function () {
        return response()->file(public_path('nuxt/services.html'));
    });

    Route::get('/about', function () {
        return response()->file(public_path('nuxt/about.html'));
    });

    Route::get('/products', function () {
        return response()->file(public_path('nuxt/products.html'));
    });

    Route::get('/shop', function () {
        return response()->file(public_path('nuxt/shop.html'));
    });

    Route::get('/vps-hosting', function () {
        return response()->file(public_path('nuxt/vps_hosting.html'));
    });

    Route::get('/website-hosting', function () {
        return response()->file(public_path('nuxt/website_hosting.html'));
    });

    Route::get('/wordpress-hosting', function () {
        return response()->file(public_path('nuxt/wordpress_hosting.html'));
    });

    // Routes for Vue components
    Route::get('/about', function () {
        return view('nuxt.pages.about');
    });

    Route::get('/contact', function () {
        return view('nuxt.pages.contact');
    });

    Route::get('/index', function () {
        return view('nuxt.pages.index');
    });

    Route::get('/products', function () {
        return view('nuxt.pages.products');
    });

    Route::get('/services', function () {
        return view('nuxt.pages.services');
    });

    Route::get('/shop', function () {
        return view('nuxt.pages.shop');
    });

    Route::get('/vps-hosting', function () {
        return view('nuxt.pages.vps-hosting');
    });

    Route::get('/website-hosting', function () {
        return view('nuxt.pages.website-hosting');
    });

    Route::get('/wordpress-hosting', function () {
        return view('nuxt.pages.wordpress-hosting');
    });
});

// Routes for nuxtt.3three.io
Route::prefix('nowui')->group(function () {
    // Routes for Vue components
    Route::get('/about', function () {
        return view('nowui.pages.about');
    });

    Route::get('/blog-post', function () {
        return view('nowui.pages.blog-post');
    });

    Route::get('/blog-posts', function () {
        return view('nowui.pages.blog-posts');
    });

    Route::get('/components', function () {
        return view('nowui.pages.components');
    });

    Route::get('/contact', function () {
        return view('nowui.pages.contact');
    });

    Route::get('/ecommerce', function () {
        return view('nowui.pages.ecommerce');
    });

    Route::get('/index', function () {
        return view('nowui.pages.index');
    });

    Route::get('/demo', function () {
        return view('nowui.pages.demo');
    });

    Route::get('/landing', function () {
        return view('nowui.pages.landing');
    });

    Route::get('/login', function () {
        return view('nowui.pages.login');
    });

    Route::get('/pricing', function () {
        return view('nowui.pages.pricing');
    });

    Route::get('/product', function () {
        return view('nowui.pages.product');
    });

    Route::get('/profile', function () {
        return view('nowui.pages.profile');
    });

    Route::get('/sections', function () {
        return view('nowui.pages.sections');
    });

    Route::get('/signup', function () {
        return view('nowui.pages.signup');
    });
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
    Route::post('/login', [LoginController::class, 'store'])->name('api.login');
    Route::post('/register', [RegisterController::class, 'store'])->name('api.register');
    Route::post('/logout', [LogoutController::class, 'store'])->middleware('auth:api')->name('api.logout');
    Route::post('/password-forgot', [ForgotPasswordController::class, 'store'])->name('api.password.forgot');
    Route::post('/password-reset', [ResetPasswordController::class, 'store'])->name('api.password.reset');
    Route::get('me', [MeController::class, 'readProfile'])->name('api.me.read');
    Route::patch('me', [MeController::class, 'updateProfile'])->name('api.me.update');
    Route::post('/uploads/{resource}/{id}/{field}', [UploadController::class, 'store'])->name('api.uploads.store');
});

JsonApiRoute::server('v2')->prefix('v2')->resources(function (ResourceRegistrar $server) {
    $server->resource('categories', JsonApiController::class);
    $server->resource('items', JsonApiController::class);
    $server->resource('permissions', JsonApiController::class)->only('index');
    $server->resource('roles', JsonApiController::class);
    $server->resource('tags', JsonApiController::class);
    $server->resource('users', JsonApiController::class);
});

Route::post('/login', [AuthController::class, 'login'])->name('login');

Route::get('/csrf-token', function () {
    return response()->json(['csrf_token' => csrf_token()]);
});
