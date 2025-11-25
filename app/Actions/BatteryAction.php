<?php

namespace App\Actions;

use App\Models\Battery;

class BatteryAction
{

    public function store($data)
    {
        $battery = Battery::create($data);
        return $battery;
    }

    public function update($id, $data)
    {
        $battery = Battery::findOrFail($id);
        $battery->update($data);
        return $battery->fresh();
    }
}
