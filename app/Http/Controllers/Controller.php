<?php

namespace App\Http\Controllers;


use App\Http\Libraries\Status\Status;
use App\HTTP\Libraries\Token;
use App\Http\Libraries\VerifyEmail\VerifyEmail;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests, Token, VerifyEmail, Status;

    
}
