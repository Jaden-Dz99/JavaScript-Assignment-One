/**
 * Javascript Assignment Problem 05
 *
 * Filename: js/problem-05
 * Author:   Jaden Dzubiel
 * Date:     2019-04-06
 *
 */

function ConvertTemp() {
    var txtTemp = document.getElementById('txtTemp').value;
    var formRadio = document.tempForm.radTemp;
    var fahrenheitToCelsius = '';
    var celsiusToFahrenheit = '';
    var i;
    if (txtTemp === '')
    {
        alert("Error - Please Enter Value");
    }
    else if (isNaN(txtTemp))
    {
        alert("Error - Please Enter Number");
        document.getElementById('divResults').innerHTML ='';
    }

    for (i = 0; i < formRadio.length; i++)
    {
        if (formRadio[i].checked)
        {
            if (formRadio[i].value == 'FC')
            { //Convert Fahrenheit To Celsius scale.
                celsiusToFahrenheit = (txtTemp - 32) * (5 / 9);
                document.getElementById('divResults').innerHTML = txtTemp + "ºF is" + celsiusToFahrenheit + "ºC";
            }
            if (formRadio[i].value == 'CF')
            { //Converts Celsius To Fahrenheit scale.
                fahrenheitToCelsius = (txtTemp * (9 / 5)) + 32;
                document.getElementById('divResults').innerHTML = txtTemp + "ºC is " + fahrenheitToCelsius + "ºF";
            }
        }
    }
}