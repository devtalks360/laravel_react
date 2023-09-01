<?php

use App\Http\Controllers\ContactController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'user' => "John Doe"
    ]);
})->name("home");

Route::get('/about-us', function () {
    return Inertia::render('About');
})->name("about-us");

Route::get('/contact-us', function () {
    return Inertia::render('Contact');
})->name("contact-us");

Route::post('/send_message',[ContactController::class,"store"])->name("send_message");


