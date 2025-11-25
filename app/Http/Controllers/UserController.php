<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use App\Queries\User\UserQuery;
use Illuminate\Http\Request;

class UserController extends Controller
{

    protected $userQuery;

    public function __construct(UserQuery $userQuery)
    {
        $this->userQuery = $userQuery;
    }

    public function index()
    {
        $users = $this->userQuery->getAll();
        return inertia('User/Index', [
            'users' => UserResource::collection($users),
        ]);
    }   
}
