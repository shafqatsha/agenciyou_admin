<?php

use Carbon\Carbon;
use App\Models\User;
use App\Models\Admin;
use App\Models\Store;
use App\Models\Folder;
use App\Models\MediaLink;
use App\Models\StoreUser;
use App\Models\WorkSession;
use Illuminate\Support\Arr;
use Aws\CloudFront\UrlSigner;
use App\Facades\ActivityLogger;
use Illuminate\Http\UploadedFile;
use Laravel\Cashier\Subscription;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Log;
use App\Enums\TransactionStatusEnum;
use \Illuminate\Support\Facades\Cache;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Spatie\Permission\PermissionRegistrar;
use Spatie\MediaLibrary\MediaCollections\Models\Media;


function _user(): ?Admin
{
    return request()->user();
}

function _getSignedUrl($path)
{

    /** @var \Illuminate\Filesystem\AwsS3V3Adapter $s3 */
    $s3 = Storage::disk('s3');
    return $s3->temporaryUrl($path, now()->addMinutes(30));

    // $accessKey = config('aws.aws_key_pair_id');
    // $secretKey = base_path(config('aws.aws_private_key_path'));
    // $distributionUrl = config('filesystems.disks.s3.url') . '/' . $path;

    // $cacheKey = 'signed_url_' . $path;
    // $expires = time() + config('aws.aws_expiry_time');
    // $signedUrl = Cache::get($cacheKey);

    // if ($signedUrl) {
    //     return $signedUrl;
    // }

    // $signer = new UrlSigner($accessKey, $secretKey);
    // $signedUrl = $signer->getSignedUrl($distributionUrl, $expires);
    // return $signedUrl;
}


if (!function_exists('_appLog')) {
    function _appLog(string $level, string $message, array $context = []): void
    {
        Log::{$level}($message, $context);
    }
}

if (!function_exists('_shopifyLog')) {
    function _shopifyLog(string $level, string $message, array $context = []): void
    {
        Log::channel('shopify')->{$level}($message, $context);
    }
}

if (!function_exists('log_activity')) {
    function log_activity(
        string $logName,
        string $message,
        ?Model $performedOn = null,
        ?Model $causedBy = null,
        array $properties = [],
        ?string $event = null
    ): void
    {
        $logger = activity($logName)
            ->causedBy($causedBy ?? _user())
            ->performedOn($performedOn)
            ->withProperties($properties);

        if ($event) {
            $logger->event($event);
        }

        $logger->log($message);
    }
}


if (!function_exists('_uploadMedia')) {
    function _uploadMedia(
        Illuminate\Database\Eloquent\Model $targetModel,
        UploadedFile|string|null $file,
        string $collection = 'drive',
    ): ?Media {


        if (!$file || !$targetModel) {
            return null;
        }

        try {
            $media = $targetModel->addMedia($file)->toMediaCollection($collection);

            return $media;
        } catch (\Throwable $e) {
            _appLog('error', 'Media upload failed', [
                'message'    => $e->getMessage()
            ]);
            return null;
        }
    }
}
