/**
 * Javascript Assignment - Problem 03
 *
 * Filename: js/problem-03.js
 * Author:   Jaden Dzubiel
 * Date:     2019-04-06
 *
 */

    let total = 0;
    let number = 0;

    number = prompt("Enter a number");
    number = parseInt(number);

    for (let count = 1 ; count < number;count++)
    {
        if ((number % 3) === 0 && (number % 5) === 0)
        {
            total = count + number;
        }
    }
    console.log("Total number is: "+total);