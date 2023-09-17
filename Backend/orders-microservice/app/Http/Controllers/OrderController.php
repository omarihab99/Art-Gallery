<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Http;
use Illuminate\Http\Request;
use App\Models\Order;
use App\Models\OrderItem;

class OrderController extends Controller
{
    //
    public function store(Request $request)
    {
        $order = Order::create([
            'customer_name' => $request->customer_name,
            'customer_email' => $request->customer_email,
            'customer_phone' => $request->customer_phone,
            'customer_address' => $request->customer_address,
            'order_date' => $request->order_date,
            'order_status' => $request->order_status,
            'order_total' => $request->order_total
        ]);
        $productIds = $request->input('product_ids');
        $quantities = $request->input('quantities');
        $response = Http::post('http://0.0.0.0:8000/api/products/info', [
            'product_ids' => $productIds,
        ]);
        if ($response->successful()) {
            $productInfoArray = $response->json();
            // $orderItems =[];
            foreach ($productInfoArray as $productInfo) {
                $productId = $productInfo['id'];
                $quantity = $quantities[array_search($productId, $productIds)];
                $orderItem = OrderItem::create([
                    'order_id' => $order->id,
                    'product_id' => $productId,
                    'quantity' => $quantity,
                    'subtotal' => $quantity * $productInfo['price'],
                ]);
            }
            return response()->json(['message' => 'Order created successfully'], 201);
        }
        return response()->json(['message' => 'Something went wrong'], 500);
    }
    public function index()
    {
        $orders = Order::with('items')->get();
        return response()->json(['orders' => $orders]);
    }
   

    public function update(Request $request)
    {
        $order = Order::find($request->id);
        if(!$order){
            return response()->json(['message' => 'Order not found'], 404);
        }
        Order::where('id', $request->id)->update([
            'order_status' => $request->order_status
        ]);
        return response()->json(['order' => $order]);
    }
}
