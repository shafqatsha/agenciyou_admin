<?php

namespace App\Actions;

use Illuminate\Support\Facades\Auth;

class LoginAction
{

    public function login($data): ?object
    {

        if ($data === null) {
            return null;
        }

        // Attempt login
        if (!Auth::attempt([
            'email' => $data['email'],
            'password' => $data['password'],
        ])) {
            return null;
        }

        $admin = Auth::user();

        if ($admin === null) {
            return null;
        }

        return $admin;
    }

    public function logout($request): void
    {
        auth()->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();
    }
}
