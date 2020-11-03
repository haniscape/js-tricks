// Hello JavaScript
// end each line with semicolon (;)


/* INLINE COMMENT 
===================
* 2 forward slashes
* "in-line" means it can be in the middle of a line of code
var number = 5;  // in-line comment
*/


/* MULTILINE COMMENT
=====================
* slash star ... star slash
* multi-line comments in VS Code ---> SHiFT + ALt + A
*/


/* DATA TYPES
==============
* there are 7 data types in js:
* 1- undefined = something (ie. a variable) not asigned to a value yet
* 2- null = nothing
* 3- boolean = true or false
* 4- string = a text
* 5- symbol = immutable primitive value that is unique
* 6- number = a number
* 7- object = can store key/value pairs

* DATA usually is stored in a VARIABLE
* you can declare a variable with 3 keywords:
* VAR, LET and CONST
var myName = "Hany";   // VAR is gonna be used throughout the whole program
let ourName = "FreeCodeCamp";   // LET only used within the scope where you declare it
const pi = 3.14;   // is a constant , that means it cannot change value
*/


/* DECLARING and ASSIGNING variables
=======================================
* we declare using one of the three keywords (var, let , const):
var a;

* then we assign a value using (=) , or better declare/assign at the same line:
var b = 5;   // this is called INITIALIZING a value while declaring a variable

* you can assign a value to an already declared variable :
a = 7;

* check the value of a variable in the Console by mentioning its name and ENTER
a;


* you can do ARITHMATIC operation using the declared variables:
a + b;  // returns 12 (that is 5 + 7)

* you can even make 2 variables equalized in value using also (=):
b = a; 
a + b;  // now returns 10 not 12

* use console.log()   to print values on the console screen
* notice that the result will be defined based on where is console.log()


var a;
console.log(a);   // returns   null   --> because the variable a is not assigned a value yet

var a = 1979;
console.log(a);   // it will return  1979

*/





/* INITIALIZING VARIABLES with ASSIGNMENT OPERATOR
====================================================
* the following variables are UNINTIALIZED (their values are not defined):
var a;
var b;
var c;

to initialize them we use the assignment operator (=) then a given value:
var a = 5;
var b = 10;
var c = "I am a";

* after that you can play a little:
a = a + 1;   // it returns 6 
b = b + 14;  // it returns 24
c = c + " string";   // notice how we concatinated 2 strings together using (+)
*/



/* CASE SENSITIVE VARIABLE NAMES and FUNCTION NAMES
=====================================================
* 
* 
* 
* 
*/