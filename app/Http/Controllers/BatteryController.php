<?php

namespace App\Http\Controllers;

use App\Actions\BatteryAction;
use App\Http\Requests\Battery\StoreBatteryRequest;
use App\Http\Requests\Battery\UpdateBatteryRequest;
use App\Http\Resources\BatteryResource;
use App\Queries\BatteryQuery;
use Illuminate\Http\Request;
use App\Models\Battery;

class BatteryController extends Controller
{
    protected $batteryAction;
    protected $batteryQuery;

    public function __construct(BatteryAction $batteryAction, BatteryQuery $batteryQuery)
    {
        $this->batteryAction = $batteryAction;
        $this->batteryQuery = $batteryQuery;
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $batteries = $this->batteryQuery->getAll();
        
        return inertia('Battery/Index', [
            'batteries' => BatteryResource::collection($batteries),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Battery/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreBatteryRequest $request)
    {
        $this->batteryAction->store($request->validated());
        return redirect()->route('batteries.index');    
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Battery $battery)
    {
        return inertia('Battery/Edit', [
            'battery' => BatteryResource::make($battery),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateBatteryRequest $request, string $id)
    {   
        $this->batteryAction->update($id, $request->validated());
        return redirect()->route('batteries.index');
    }
}
