<?php

use App\Http\Controllers\Auth\AuthUserController;
use App\Http\Controllers\User\UserController;
use App\Models\Verification;
use Illuminate\Auth\Notifications\VerifyEmail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('login', [AuthUserController::class, 'login']);
Route::post('register', [AuthUserController::class, 'signup']);

Route::middleware('auth.jwt')->group(function(){

    Route::get('resend/{user}', [AuthUserController::class, 'resendVerificationLink']);

    Route::middleware('verified.email')->group(function(){
        
        Route::post('logout', [AuthUserController::class, 'logout']);

        Route::prefix('user')->group(function(){
            Route::post('update', [UserController::class, 'update']);
            Route::get('auth_user', [UserController::class, 'getLoggedInUser']);
            Route::get('user/{user}', [UserController::class, 'show']);
        });

    });

});
