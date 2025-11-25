<?php

namespace App\Actions\Payment;

use App\Enums\UserPaymentStatus;

class PaymentAction
{
    public function verified($user, $status)
    {

        $user->payment_status = $status;
        $user->save();
        return $user->fresh();
    }

}
