<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BatteryController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\UserController;
use App\Models\Battery;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');



Route::get('/partners/{id}', function () {
    return Inertia::render('partners-detail');
})->name('partners.detail');

Route::get('login' , function() {
    return Inertia::render('auth/login');
})->name('login');

Route::post('/login', [AuthController::class, 'login'])->name('login-store');
Route::post('/logout', [AuthController::class, 'logout'])->name('logout');
// Route::middleware(['auth'])->group(function () {


    Route::get('batteries', [BatteryController::class, 'index'])->name('batteries.index');
    Route::get('batteries/create' , function() {
        return Inertia::render('batteries/create');
    });
    Route::post('/batteries', [BatteryController::class, 'store'])->name('batteries.store');
    Route::get('/batteries/{battery}', [BatteryController::class, 'show'])->name('batteries.show');
    Route::put('/batteries/{battery}', [BatteryController::class, 'update'])->name('batteries.update');

    Route::get('/partners', [UserController::class, 'index'])->name('users.index');
    Route::put('/payment/{user}', [PaymentController::class, 'verifiedPayment'])->name('payment.verfied');
// });

