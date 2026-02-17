"""
This module provides functions to help calculate the preparation and baking times
for making Guido's gorgeous lasagna. It includes utilities for determining the
remaining bake time, total preparation time based on the number of layers, and
the total elapsed time spent on the lasagna.
"""
EXPECTED_BAKE_TIME = 40
PREPARATION_TIME = 2


def bake_time_remaining(actual_minutes):
    """Return remaining bake time (in minutes) given the elapsed baking time.
    
    Args:
        actual_minutes (int): The number of minutes the lasagna has been baking.

    Returns:
        int: Remaining bake time in minutes.
    """
    return EXPECTED_BAKE_TIME - actual_minutes


def preparation_time_in_minutes(number_of_layers):
    """Return total preparation time (in minutes) for the given number of layers.

    Args:
        number_of_layers (int): The number of lasagna layers.

    Returns:
        int: Total preparation time in minutes.
    """
    return number_of_layers * PREPARATION_TIME    

def elapsed_time_in_minutes(number_of_layers , elapsed_bake_time):
    """Return total elapsed time (in minutes) including prep and bake time.

    Args:
        number_of_layers (int): The number of lasagna layers.
        elapsed_bake_time (int): The number of minutes the lasagna has been baking.

    Returns:
        int: Total elapsed time in minutes.
    """
    return preparation_time_in_minutes(number_of_layers) + elapsed_bake_time
