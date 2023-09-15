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
    // public function show(Request $request)
    // {
    //     try {
    //         $orderId = $request->id;
    //         $order = Order::find($orderId);
    //         $productIdsArray = explode(',', $request->product_ids);

    //         // Send a single HTTP request to fetch product information for all specified product IDs
    //         $response = Http::get('https://other-microservice-url/api/products', [
    //             'product_ids' => implode(',', $productIdsArray),
    //         ]);

    //         if ($response->successful()) {
    //             $productInfoArray = $response->json();

    //             // Retrieve the orders that include the specified products
    //             $orders = Order::whereHas('items', function ($query) use ($productIdsArray) {
    //                 $query->whereIn('product_id', $productIdsArray);
    //             })->get();

    //             // Return the product information and associated orders as JSON
    //             return response()->json([
    //                 'product_info' => $productInfoArray,
    //                 'orders' => $orders,
    //             ]);
    //         } else {
    //             // Handle the case where product info couldn't be retrieved from the other microservice
    //             return response()->json(['error' => 'Product information not available'], 404);
    //         }
    //     } catch (\Throwable $th) {
    //         //throw $th;
    //         return response()->json(['message' => $th->getMessage()], 500);
    //     }
    // }

    public function update(Order $order, Request $request)
    {
        $order->update($request->all());
        return response()->json(['order' => $order]);
    }
}
