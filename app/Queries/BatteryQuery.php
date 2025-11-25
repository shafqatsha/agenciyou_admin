<?php

namespace App\Queries;

use App\Models\Battery;

class BatteryQuery
{
    public function getAll()
    {
        return Battery::all();
    }

    public function findById(Battery $id)
    {
        return Battery::findOrFail($id->id);
    }   

}
