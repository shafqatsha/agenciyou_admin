<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\CountryResource;

class UserProfileResource extends JsonResource
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
            'phone_number' => $this->phone_number,
            'website' => $this->website,
            'about' => $this->about,
            'street_address' => $this->street_address,
            'postal_code' => $this->postal_code,
            'city' => $this->city,
            'country' => new CountryResource($this->country),
            'iban' => $this->iban,
            'vat_number' => $this->vat_number,
            'kvk_number' => $this->kvk_number,

        ];
    }
}
