var Celsius = 0,Farenheit = 0;
Celsius = prompt("Enter Temperature in Celsius :",Celsius);
document.writeln(Celsius,"&deg; C is ", (Celsius * (9/5)+ 32) , "&deg;F<br>");
Farenheit = prompt("Enter Temperature in Farenheit :",Farenheit);
document.writeln(Farenheit,"&deg;F is ", ((Farenheit - 32) * (5/9)) , "&deg;C")