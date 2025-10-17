<?php

class PizzaPi
{
    public function calculateDoughRequirement(int $pizzas, int $persons)
    {
        return $pizzas * ($persons * 20 + 200);
    }

    public function calculateSauceRequirement(int $pizzas, int $sauce_can_volume)
    {
        $sauce_per_pizza = 125;

        return (int) $pizzas * $sauce_per_pizza / $sauce_can_volume;
    }

    public function calculateCheeseCubeCoverage(int $cheese_dimension, float $thickness, int $diameter)
    {
        return intval(($cheese_dimension ** 3) / (pi() * $diameter  * $thickness));
    }

    public function calculateLeftOverSlices(int $pizzas, int $friends)
    {
        $slices_per_pizza = 8;

        return ($pizzas * $slices_per_pizza) % $friends;
    }
}
