var a = 2, b = 1;
document.writeln("a : ",a,"<br>");
document.writeln("b : ",b,"<br>");
document.writeln("--a : ",a-1," Explanation : Since The Decrement Operators are placed Before the Variable, The Decrement operation will be performed in the variable and then the resultant value will be returned","<br>");
document.writeln("--b : ",b-1," Explanation : This will perform the same thing as stated above","<br>");
document.writeln("--a - --b : ",a-1,'-', b-1," Explanation : Subtraction of Variables after the Decrement Operation returns the Value","<br>");
document.writeln("--a - --b : ",(a-1)-(b-1),"<br>");
document.writeln("++b : ",b+1," Explanation : Since The Increment Operators are placed Before the Variable, The Increment operation will be performed in the variable and then the resultant value will be returned","<br>");
document.writeln("b-- : ",b," Explanation : Since The Decrement Operators are placed After the Variable, The Initial Value will be returned to do the next operation and then there will be an increment in the variable","<br>");
document.writeln("++b + b-- : ",b+1,'+', b," Explanation : Addition of Variables After the Increment Operation on first variable & Before Decrement on The Second Variable","<br>");
document.writeln("++b + b-- : ",(b+1)+(b),"<br>");

var result = (--a) - (--b) + (++b) + (b--);

document.writeln("Result : ",result);
