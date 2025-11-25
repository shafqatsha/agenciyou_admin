<?php

namespace App\Http\Controllers;

use App\Actions\Payment\PaymentAction;
use App\Http\Requests\PaymentStatusRequest;
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

    public function verifiedPayment(User $user, PaymentStatusRequest $request)
    {
        $status = $request->validated();
        $user =  $this->action->verified($user, $status);
        return _successResponse(UserResource::make($user), 'Payment updated successfully', 200);
        
    }

}
