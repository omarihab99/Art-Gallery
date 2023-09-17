<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Hash;
// use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;
use App\Models\User;
class UserController extends Controller
{
    /**
     * Logs in a user.
     *
     * @param Request $request The request object containing the user's email and password.
     * @throws \Illuminate\Validation\ValidationException If the request data fails validation.
     * @return \Illuminate\Http\JsonResponse The JSON response containing the user's token on successful login.
     */
    public function login(Request $request){
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|string|min:8|regex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/',
        ],[
            'email.required' => 'Email is required',
            'password.required' => 'Password is required',
            'password.min' => 'Password must be at least 8 characters',
            'password.regex' => 'Password must contain at least one uppercase letter, one lowercase letter, one number and one special character',

        ]);
        if($validator->fails()){
            return response()->json($validator->errors(), 400);
        }
        $credentials = $request->only('email', 'password');
        if (!$token = JWTAuth::attempt($credentials)) {
            return response()->json(['error' => 'invalid_credentials'], 400);
        }
        return response()->json(['token' => $token, 'user' => auth()->user()], 200);
    }
    /**
     * Register a new user.
     *
     * @param Request $request The request object containing user data.
     * @throws \Illuminate\Validation\ValidationException If validation fails.
     * @return \Illuminate\Http\JsonResponse The response containing a success message and token.
     */
    public function register(Request $request){
        try {
            $validator = Validator::make($request->all(), [
                'email' => 'required|email',
                'password' => 'required|string|min:8|confirmed|regex:/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/',
                'name' => 'required',
                'address' => 'required',
                'phone' => 'required|regex:/^[\d()+\-.\s]*$/',
            ],[
                'email.required' => 'Email is required',
                'password.required' => 'Password is required',
                'name.required' => 'Name is required',
                'address.required' => 'Address is required',
                'phone.required' => 'Phone is required',
                'phone.numeric' => 'Phone must be numeric',
                'phone.digits' => 'Phone must be 11 digits',
                'password.min' => 'Password must be at least 8 characters',
                'password.confirmed' => 'Password confirmation does not match',
                'password.regex' => 'Password must contain at least one uppercase letter, one lowercase letter, one number and one special character',
    
            ]);
            if($validator->fails()){
                return response()->json($validator->errors(), 400);
            }
    
            $user = new User([
                'name' => $request->name,
                'email' => $request->email,
                'password' => bcrypt($request->password),
                'address' => $request->address,
                'phone' => $request->phone
            ]);
            $user->save();
            $token = JWTAuth::fromUser($user);
            return response()->json(['token' => $token], 201);
        } catch (\Throwable $th) {
            //throw $th;
            return response()->json(['message' => $th->getMessage()], 500);
        }
        
    }
    public function index(){
        try {
            $users = User::all();
            if(!$users){
                return response()->json(['message' => 'No users found'], 404);
            }
            return response()->json(['users' => $users]);
        } catch (\Throwable $th) {
            return response()->json(['message' => $th->getMessage()], 500);
        }      
    }
}
