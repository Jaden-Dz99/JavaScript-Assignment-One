/**
 * Javascript Assignment Problem 06
 *
 * Filename: js/problem-06
 * Author:   Jaden Dzubiel
 * Date:     2019-04-09
 *
 */

let doc = document;
let form = doc.querySelector("form");

// Error displays are blank when form is running
fruitError.innerHTML = "";
priceError.innerHTML = "";
amountError.innerHTML = "";

// Listing variables with appropriate match to id's
var givenFruit = doc.getElementById("givenFruit");
var givenPrice = doc.getElementById("givenPrice");
var givenAmount = doc.getElementById("givenAmount");

// Simplifying code for readability
let fruitResult = doc.getElementById("fruitResult");
let priceResult = doc.getElementById("priceResult");
let amountResult = doc.getElementById("amountResult");
let result = doc.getElementById("result");

// Adding event listeners when a value has changed (text input/button click)
givenFruit.addEventListener("change", Fruit, false);
givenPrice.addEventListener("input", Price, false);
givenAmount.addEventListener("input", Amount, false);

// Activated when button is changed, the values are updated to fruit selected.
function Fruit(e) {
    e.preventDefault();
    var aFruit = givenFruit.value;
    fruitResult.innerHTML = aFruit;

    // If no fruit selected, error message appears.
    if (givenFruit.value == "")
    {
        fruitError.innerHTML = "Please select a fruit";
    }
    else
    {
        fruitError.innerHTML = "";
        Result();
    }
}

// Activated when text has input, the values are updated to price entered.
function Price(e)
{
    e.preventDefault();
    var aPrice = givenPrice.value;
    priceResult.innerHTML = aPrice;

    // If no price entered, error message appears.
    if (givenPrice.value == "")
    {
        priceError.innerHTML = "Please enter a price that is 0 or more";
    } else
    {
        priceError.innerHTML = "";
        Result();
    }
}

// Activated when text has input, the values are updated to amount entered.
function Amount(e)
{
    e.preventDefault();
    var anAmount = givenAmount.value;
    amountResult.innerHTML = anAmount;

    // If no amount entered, error message appears.
    if (givenAmount.value == "")
    {
       amountError.innerHTML = "Please enter a quantity that is greater than 0";
    }
    else
    {
        amountError.innerHTML = "";
        Result();
    }
}

// All values appear within result section and equation given below is executed.
function Result()
{
    var aFruit = givenFruit.value;
    fruitResult.innerHTML = aFruit;
    var aPrice = givenPrice.value;
    priceResult.innerHTML = aPrice;
    var anAmount = givenAmount.value;
    amountResult.innerHTML = anAmount;
    result.innerHTML = aFruit + ": " + anAmount + "kg at $" +  aPrice + " = " + " $" + ((aPrice * anAmount)).toFixed(2);
}

