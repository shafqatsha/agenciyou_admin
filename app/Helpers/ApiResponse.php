<?php

use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;

if (!function_exists('_successResponse')) {
    function _successResponse(mixed $data = null, string $message = 'success', int $code = 200): JsonResponse
    {
        // Flatten if it's a resource with data, links, and meta
        if (is_array($data) && isset($data['data'], $data['links'], $data['meta'])) {
            $data = [
                'items' => $data['data'] ?? [],
                'pagination' => [
                    'links' => $data['links'] ?? [],
                    'meta' => $data['meta'] ?? [],
                ],
            ];
        }

        return response()->json([
            'status'  => 'success',
            'message' => $message ?? 'success',
            'data'    => $data ?? null,
        ], $code);
    }
}

if (!function_exists('_errorResponse')) {
    function _errorResponse(string $message = 'error', $code = 400): JsonResponse
    {
        // Normalize code: if non-int, default to 400 (client error)
        $code = is_int($code) ? $code : 400;

        // Guard against invalid or out-of-range HTTP status codes.
        // Symfony (and RFC) valid range: 100 - 599. Anything outside should degrade gracefully.
        // Additionally, many generic Exceptions have a default code of 0 which must be mapped.
        if ($code < 100 || $code > 599) {
            // Prefer 500 for unknown / server side failures.
            $code = 500;
        }

        return response()->json([
            'status' => 'error',
            'message' => $message ?? 'error',
        ], $code);
    }
}


if (!function_exists('_throwException')) {
    function _throwException(string $message, int $code = 400): never
    {
        throw new Exception($message, $code);
    }
}



if (!function_exists('log_json_response')) {

    function log_json_response($data, $message = 'JSON Response Log', $level = 'info')
    {
        $logData = is_string($data) ? json_decode($data, true) : $data;

        $formattedJson = json_encode($logData, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);

        $logMessage = "$message:\n$formattedJson";

        switch (strtolower($level)) {
            case 'error':
                Log::error($logMessage);
                break;
            case 'warning':
            case 'warn':
                Log::warning($logMessage);
                break;
            case 'debug':
                Log::debug($logMessage);
                break;
            default:
                Log::info($logMessage);
                break;
        }
    }
}

