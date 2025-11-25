<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Battery extends Model implements HasMedia
{

    use InteractsWithMedia;

    protected $guarded = ['id'];

    protected $casts = [
        'is_enabled' => 'boolean',
        'installation_required' => 'boolean',
        'dimensions' => 'array',
        'included_materials' => 'array',
        'ems_features' => 'array',
        'materials' => 'array',
    ];
    protected $with = ['media'];

    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('image')->singleFile();
    }
}
