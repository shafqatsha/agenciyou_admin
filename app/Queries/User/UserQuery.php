<?php

namespace App\Queries\User;

use App\Models\User;

class UserQuery
{
    public function getAll($page)
    {
        return User::paginate(perPage: 10, page: $page);
    }   
}
