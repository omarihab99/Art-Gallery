<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use App\Models\Product;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{
    // Get all products
    public function index()
    {
        $products = Product::all();
        return response()->json(['data' => $products]);
    }
    // Get product by id
    public function show(Request $request)
    {
        try {
            //code...
            $product = Product::find($request['id']);
            if (!$product) {
                return response()->json(['message' => 'Product not found'], 404);
            }
            return response()->json($product);
        } catch (\Throwable $th) {
            //throw $th;
            return response()->json(['message' => $th->getMessage()], 500);
        }
    }
    // Update product
    public function update(Request $request)
    {
        try {
            //code...
            $id = $request['id'];
            $validator = Validator::make($request->all(), [
                'name' => 'sometimes|required|string|max:255',
                'description' => 'sometimes|required|string',
                'price' => 'sometimes|required|numeric',
                'image' => 'sometimes|required|string|max:255',
                'stock' => 'sometimes|required|numeric',
                'category' => 'sometimes|required|string|max:255',
                'status' => 'sometimes|required|string|max:255',
            ]);
            if ($validator->fails()) {
                return response()->json(['errors' => $validator->errors(), 'message' => 'Validation error'], 422);
            }
            $product = Product::find($id)->update($request->json()->all());
            if (!$product) {
                return response()->json(['message' => 'Product not found'], 404);
            }
            return response()->json(['maessage' => 'Product updated successfully', 'product' => $product]);
        } catch (\Throwable $th) {
            //throw $th;
            return response()->json(['message' => $th->getMessage()], 500);
        }
    }
    // Delete product
    public function delete($id)
    {
        $product = Product::find($id);
        if (!$product) {
            return response()->json(['message' => 'Product not found'], 404);
        }
        $product->delete();
        return response()->json(['message' => 'Product deleted successfully']);
    }
    // Create product
    public function create(Request $request)
    {
        try {
            //code...
            $validator = Validator::make($request->all(), [
                'name' => 'required|string|max:255',
                'description' => 'required|string|',
                'price' => 'required|numeric',
                'image' => 'required|string|max:255',
                'stock' => 'required|numeric',
                'category' => 'required|string|max:255',
                'status' => 'required|string|max:255',
            ], [
                'name.required' => 'Name is required',
                'description.required' => 'Description is required',
                'price.required' => 'Price is required',
                'image.required' => 'Image is required',
                'stock.required' => 'Stock is required',
                'category.required' => 'Category is required',
                'status.required' => 'Status is required',
                'name.max' => 'Name must be less than 255 characters',
                'price.numeric' => 'Price must be a number',
                'image.max' => 'Image must be less than 255 characters',
                'stock.numeric' => 'Stock must be a number',
                'category.max' => 'Category must be less than 255 characters',
                'status.max' => 'Status must be less than 255 characters',
            ]);
            if ($validator->fails()) {
                return response()->json(['errors' => $validator->errors(), 'message' => 'Validation error'], 422);
            }
            $product = new Product($request->json()->all());
            if (!$product) {
                return response()->json(['message' => 'Product not found'], 404);
            }
            $product->save();

            return response()->json(['message' => 'Product created successfully', 'product' => $product], 201);
        } catch (\Throwable $th) {
            //throw $th;
            return response()->json(['message' => $th->getMessage()], 500);
        }
    }
    public function info(Request $request)
    {
        $productIds  = $request->json()->all();
        $products = [];
        foreach($productIds as $productId) {
            $product = Product::find($productId);
            print($product);
            if (!$product) {
                return response()->json(['message' => 'Product not found', 'id' => $productId], 404);
            }
            $products[] = $product;
        }
        return response()->json(['products' => $products]);
    }
}
