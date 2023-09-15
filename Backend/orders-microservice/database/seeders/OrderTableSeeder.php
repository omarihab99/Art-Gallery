<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Order;
class OrderTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Order::create([
            'customer_name' => 'Omar',
            'customer_email' => 'omar@hotmail.com',
            'customer_phone' => '0123456789',
            'customer_address' => 'Cairo',
            'order_date' => now(),
            'order_status' => 'pending',
            'order_total' => 26600,
        ]);
    }
}
