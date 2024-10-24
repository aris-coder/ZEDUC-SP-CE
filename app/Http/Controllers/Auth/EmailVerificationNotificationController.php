<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class EmailVerificationNotificationController extends Controller
{
    /**
     * Send a new email verification notification.
     */
    public function store(Request $request): JsonResponse|RedirectResponse
    {
        if ($request->utilisateur()->hasVerifiedEmail()) {
            return redirect()->intended('/dashboard');
        }

        $request->utilisateur()->sendEmailVerificationNotification();

        return response()->json(['status' => 'verification-link-sent']);
    }
}
