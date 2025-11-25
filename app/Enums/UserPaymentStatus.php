<?php

namespace App\Enums;

enum UserPaymentStatus: string
{
    case PENDING = 'pending';
    case ACTIVE = 'active';
    case EXPIRED = 'expired';
    case CANCELLED = 'cancelled';
}
