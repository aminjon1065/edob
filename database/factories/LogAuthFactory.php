<?php

namespace Database\Factories;

use App\Models\LogAuth;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Carbon;

class LogAuthFactory extends Factory
{
    protected $model = LogAuth::class;

    public function definition()
    {
        return [
            'user_id' => $this->faker->randomNumber(),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ];
    }
}
