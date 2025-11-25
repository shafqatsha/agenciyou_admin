<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BatteryController;
use App\Http\Controllers\PaymentController;
use App\Models\Battery;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('/partners', function () {
    return Inertia::render('partners');
})->name('partners');

Route::get('/partners/{id}', function () {
    return Inertia::render('partners-detail');
})->name('partners.detail');
Route::get('/batteries', function () {
    return Inertia::render('batteries');
})->name('batteries');

Route::post('/login', [AuthController::class, 'login'])->name('login');

Route::middleware(['auth'])->group(function () {

    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    Route::get('batteries', [BatteryController::class, 'index'])->name('batteries.index');
    Route::post('/batteries', [BatteryController::class, 'store'])->name('batteries.store');
    Route::get('/batteries/{battery}', [BatteryController::class, 'show'])->name('batteries.show');
    Route::put('/batteries/{battery}', [BatteryController::class, 'update'])->name('batteries.update');

    Route::put('/payment/{user}', [PaymentController::class, 'verifiedPayment'])->name('payment.verfied');
});
