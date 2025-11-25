<?php

namespace App\Http\Requests\Battery;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class UpdateBatteryRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return Auth::check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'brand'                       => ['nullable', 'string', 'max:255'],
            'model'                       => ['required', 'string', 'max:255', 'unique:batteries,model'],

            'is_enabled'                  => ['nullable', 'boolean'],

            'sale_price'                  => ['nullable', 'numeric'],
            'advice_price'                => ['nullable', 'numeric'],

            'power_kw'                    => ['nullable', 'integer'],
            'capacity_kwh'                => ['nullable', 'integer'],

            'description'                 => ['nullable', 'string'],

            'maintenance_per_month'       => ['nullable', 'numeric'],
            'remote_monitoring_per_month' => ['nullable', 'numeric'],

            'purchase_price'              => ['nullable', 'numeric'],

            'country_of_origin'           => ['nullable', 'string', 'max:255'],

            'inverter_power_kw'           => ['nullable', 'integer'],
            'cooling_type'                => ['nullable', 'string', 'max:255'],
            'cell_type'                   => ['nullable', 'string', 'max:255'],
            'efficiency_percentage'       => ['nullable', 'numeric', 'between:0,100'],

            'lifespan_cycles'             => ['nullable', 'integer'],
            'lifespan_years'              => ['nullable', 'integer'],

            'operational_temp_min'        => ['nullable', 'integer'],
            'operational_temp_max'        => ['nullable', 'integer'],

            'weight_kg'                   => ['nullable', 'numeric'],

            'dimensions'                  => ['nullable', 'array'],
            'dimensions.length'           => ['nullable', 'numeric'],
            'dimensions.width'            => ['nullable', 'numeric'],
            'dimensions.height'           => ['nullable', 'numeric'],

            'design_notes'                => ['nullable', 'string'],

            'included_materials'          => ['nullable', 'array'],
            'included_materials.*'        => ['nullable', 'string'],

            'ems_features'                => ['nullable', 'array'],
            'ems_features.*'              => ['nullable', 'string'],

            'materials'                   => ['nullable', 'array'],
            'materials.*'                 => ['nullable', 'string'],

            'warranty_years'              => ['nullable', 'integer'],
            'installation_required'       => ['nullable', 'boolean'],

            'website_url'                 => ['nullable', 'url'],
            'datasheet_url'               => ['nullable', 'url'],
        ];
    }
}
