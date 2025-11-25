<?php

namespace App\Http\Controllers;

use App\Actions\LoginAction;
use App\Http\Requests\LoginRequest;
use Illuminate\Http\Request;

class AuthController extends Controller
{

    protected $loginAction;

    public function __construct(LoginAction $loginAction)
    {
        $this->loginAction = $loginAction;
    }   

    public function login(LoginRequest $request)
    {
        $this->loginAction->login($request->validated());
        return redirect()->route('dashboard');
    }

}
