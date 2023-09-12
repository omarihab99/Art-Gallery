<?php
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Models\User;

it('can register a new user', function () {
    $user = User::factory()->create();
    print($user);
    $response = $this->postJson('api/users/register', [
        'name' => $user->name,
        'email' => $user->email,
        'password' => $user->password,
        'password_confirmation' => $user->password,
        'address' => $user->address,
        'phone' => $user->phone,
    ]);

    expect($response->status())->toBe(201);
});
it('can login a user', function () {
    $user = User::factory()->create();
    $response = $this->post('api/users/login', [
        'email' => $user->email,
        'password' => $user->password,
    ]);
    expect($response->status())->toBe(200);
});
it('shows users', function () {
    $user = User::factory()->create();
    $response = $this->get('api/users');
    expect($response->status())->toBe(200);
});
