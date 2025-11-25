<?php

namespace App\Actions\Payment;

class PaymentAction
{
    public function verified($user)
    {
        $user->payment_status = 'verified';
        $user->save();
    }   

}
