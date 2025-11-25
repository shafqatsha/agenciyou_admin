<?php

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
