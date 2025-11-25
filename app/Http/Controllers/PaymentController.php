<?php

namespace App\Http\Controllers;

use App\Actions\Payment\PaymentAction;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;

class PaymentController extends Controller
{
    public $action; 
    
    public function __construct(PaymentAction $action)
    {
        $this->action = $action;
    }

    public function verifiedPayment(User $user)
    {
        $user =  $this->action->verified($user);
        return _successResponse(UserResource::make($user), 'Payment updated successfully', 200);
        
    }

}
