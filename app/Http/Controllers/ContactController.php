<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ContactController extends Controller
{
    //
    function store(Request $request) {
        $request->validate([
            "subject" => "required|max:100",
            "message" => "required|max:200"
        ]);

        redirect()->back()->with([
            "message" => "Contact stored successfully",
            "type" => "success",
        ]);
    }
}
