<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;

class ApiController extends Controller
{
    public function login(Request $request)
    {
        $client = new Client();
        $response = $client->post(env('API_BASE_URL') . '/login', [
            'form_params' => [
                'email' => $request->input('email'),
                'password' => $request->input('password'),
            ]
        ]);

        return response()->json(json_decode($response->getBody()), $response->getStatusCode());
    }
}
