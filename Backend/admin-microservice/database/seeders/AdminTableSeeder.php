<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Admin;

class AdminTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        Admin::create([
            'name' => 'Ali',
            'email' => 'ali@hotmail.com',
            'password' => bcrypt('12345688o@'),
            'role' => 'admin'
        ]);
       
    }
}
