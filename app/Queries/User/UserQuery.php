<?php

namespace App\Queries\User;

use App\Models\User;

class UserQuery
{
    public function getAll()
    {
        return User::get();
    }   
}
