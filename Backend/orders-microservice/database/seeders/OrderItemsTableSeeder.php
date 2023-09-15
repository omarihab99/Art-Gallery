<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\OrderItem;
class OrderItemsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        OrderItem::create([
            'order_id' => 1,
            'product_id' => 3,
            'quantity' => 1,
            'subtotal' => 15000
        ]);
        OrderItem::create([
            'order_id' => 1,
            'product_id' => 5,
            'quantity' => 1,
            'subtotal' => 11600
        ]);
    }
}
