<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name' => 'Omar',
            'email' => 'omar@hotmail.com',
            'password' => bcrypt('123456Oo@'),
            'address' => 'Cairo',
            'phone' => '0123456789',
        ]);
        User::create([
            'name' => 'Mohamed',
            'email' => 'mohaed@gmail.com',
            'password' => bcrypt('MohamedOo99@'),
            'address' => 'Alexandria',
            'phone' => '0123456889',
        ]);
        //
    }
}
