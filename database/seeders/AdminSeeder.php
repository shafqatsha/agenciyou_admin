<?php

namespace Database\Seeders;

use App\Models\Admin;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Prevent duplicate creation

        Admin::updateOrCreate(['email' => 'admin@agenciyou.com'],[
            'name' => 'Super Admin',
            'email' => 'admin@agenciyou.com',
            'password' => Hash::make('password'), // change later
        ]);
    }
}
