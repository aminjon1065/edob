<?php

namespace App\Http\Controllers;

use App\Models\ShareDocument;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GetMailsController extends Controller
{
    public function inbox()
    {
        $shareMails = ShareDocument::with(['document', 'user'])->get();
        return Inertia::render('Dashboard', [
            'mails' => $shareMails
        ]);
    }
    public function send()
    {
        $shareMails = ShareDocument::all();
        return Inertia::render('Mails/Send/index', [
            'mails' => $shareMails
        ]);
    }

}
