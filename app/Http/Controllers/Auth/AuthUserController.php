<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\User\LoginRequest;
use App\Http\Requests\Auth\User\SignupRequest;
use App\Models\User;
use Exception;
use Illuminate\Support\Facades\Auth;

class AuthUserController extends Controller
{

    public function login(LoginRequest $request){
        if (!$token = Auth::attempt($request->all())) {
            return $this->error(400, 'Invalid Email or Password');
        }

        return response()->json([
                'status' => false,
                'message' => 'Login Successful',
                'data' => [
                    'token' => $token ]
            ]);
    }

    public function signup (SignupRequest $request){
        try {
            $user_id = $this->createUniqueToken('users', 'user_id');

            $create_user = User::create(array_merge($request->validated(), 
                                                    ['user_id' => $user_id]));
            
            $create_user ? $this->verify(User::find($user_id)) 
                            : throw new Exception("User Registration Failed", 500);

        } catch (Exception $e) {
            $this->error($e->getCode(), $e->getMessage());
        }
    }


    public function remember (){

    }


    public function logout(){
        Auth::logout();
        return $this->success();
    }


}
