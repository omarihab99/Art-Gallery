<?php

use App\Models\Product;
use Illuminate\Foundation\Testing\RefreshDatabase;

use function Pest\Laravel\postJson;

it('shows a list of products', function () {
    $products = Product::factory()->count(3)->create();
    $response = $this->get('api/products');
    expect($response->status())->toBe(200);
});

it('shows a single product', function () {
    $product = Product::factory()->create();
    $response = $this->get('api/products/' . $product->id);
    expect($response->status())->toBe(200);
});

it('creates a new product', function () {
    $product = Product::factory()->make();
    $response = $this->postJson('api/products', $product->toArray());
    $response->assertStatus(201);

});

it('updates a product', function () {
    $product = Product::factory()->create();
    $response = $this->patch('api/products/' . $product->id, $product->toArray());
    expect($response->status())->toBe(200);
});
it('deletes a product', function () {
    $product = Product::factory()->create();
    $response = $this->delete('api/products/' . $product->id);
    expect($response->status())->toBe(200);
});

it('validates a product', function () {
    $product = Product::factory()->make();
    $response = $this->post('api/products', $product->toArray());
    expect($response->status())->toBe(422);
});

it('validates a product update', function () {
    $product = Product::factory()->create();
    $response = $this->patch('api/products/' , $product->toArray());
    expect($response->status())->not->toBe(200);
});

it('validates a product delete', function () {
    $product = Product::factory()->create();
    $response = $this->delete('api/products/' . 50000);
    expect($response->status())->toBe(404);
});