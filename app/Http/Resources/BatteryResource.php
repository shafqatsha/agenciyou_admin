<?php

namespace App\Http\Resources;

use App\Http\Resources\MediaResource;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class BatteryResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'brand' => $this->brand,
            'model' => $this->model,
            'is_enabled' => $this->is_enabled,

            // Pricing
            'sale_price' => $this->sale_price,
            'advice_price' => $this->advice_price,
            'purchase_price' => $this->purchase_price,

            // Power & Capacity
            'power_kw' => $this->power_kw,
            'capacity_kwh' => $this->capacity_kwh,

            // Description
            'description' => $this->description,

            // OPEX
            'maintenance_per_month' => $this->maintenance_per_month,
            'remote_monitoring_per_month' => $this->remote_monitoring_per_month,

            // General Product Info
            'country_of_origin' => $this->country_of_origin,

            // Technical Specs
            'inverter_power_kw' => $this->inverter_power_kw,
            'cooling_type' => $this->cooling_type,
            'cell_type' => $this->cell_type,
            'efficiency_percentage' => $this->efficiency_percentage,
            'lifespan_cycles' => $this->lifespan_cycles,
            'lifespan_years' => $this->lifespan_years,
            'operational_temp_min' => $this->operational_temp_min,
            'operational_temp_max' => $this->operational_temp_max,

            // Physical Attributes
            'weight_kg' => $this->weight_kg,
            'dimensions' => $this->dimensions,

            // Extra Descriptions
            'design_notes' => $this->design_notes,

            // Materials & Accessories
            'included_materials' => $this->included_materials,

            // EMS Features
            'ems_features' => $this->ems_features,

            // Warranty & Installation
            'warranty_years' => $this->warranty_years,
            'installation_required' => $this->installation_required,

            // URLs
            'website_url' => $this->website_url,
            'datasheet_url' => $this->datasheet_url,

            // Timestamps
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'materials' => $this->materials,
            // 'image' => $this->getFirstMedia('image')
            // ? _getSignedUrl($this->getFirstMedia('image')->getPath())
            // : null,
        ];
    }
}
