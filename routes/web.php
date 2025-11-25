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


Route::get('/batteries/index', function () {
    return Inertia::render('batteries/index');
})->name('batteries.list');

Route::get('/batteries/create', function () {
    return Inertia::render('batteries/create');
})->name('batteries.create');

Route::get('/batteries/{id}', function ($id) {
    return Inertia::render('batteries/detail', ['id' => $id]);
})->name('batteries.detail');
