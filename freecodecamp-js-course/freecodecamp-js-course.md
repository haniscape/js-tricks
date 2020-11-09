# Learn JavaScript - Full Course for Beginners
##  course by freeCodeCamp.org
[Link](https://www.youtube.com/watch?v=PkZNo7MFNFg)
*Summary made by Hany Afifi*

 *Notice: End all lines in JavaScript with semicolon* `;`

### Inline Comment
- Start in-line comment with `//`
- You can also add it at the end of your line
```
// This is an In-line comment
var number = 777;     // this is my lucky number
```


### Multiline Comment
- Start with `/*` ... and close with `*/`
- Multiline comment toggle <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>A</kbd> 


### Data Types
the 7 data types of JS are:
```
1- undefined = not asigned to a value yet
2- null = nothing
3- boolean = true or false
4- string = a text
5- symbol = immutable primitive value that is unique
6- number = a number
7- object = can store key/value pairs
```


## Variables

- Data are usually stored in a **variable**
- Variables are declared (given a name) using:  var ,  let or const

**var**
is used throughout the whole program
```
var myName = "Hany";
```

**let**
is only used within the _scope_ where you declare it
```
let myCourse = "Free Code Camp";
```

**const**
a constant, that means you can not change it later
```
const pi = 3.14;
```


#### Declaring / Assigning Variables
1. Declare a variable using: `var` , `let` or `const`
```
var a;
```
and Assign it using `=` with its name without var
```
a = 7
```


2. Declare new variable and Assign its value using `=` , this is called INITIALIZAING
```
var b = 5;
```

3. you can check the variable value in  _**Console**_ by mentioning its name,  or by console.log
```
a;  //will return undefined - because a is not given a value yet 
console.log(a);   // still returns undefined
```

4. You can assign a value to an already declared variable
```
var a = 7;
```

5. you can use ARITHMATIC operations with variables:
```
a + b;  // will return 12 (7 + 5)
```


6. Make 2 variables _equal_ using also `=`
```
a = b;
a + b;   // now it will return 10 (5 + 5)
```


#### JS variables is case sensitive 
- in the following DECLARATION did not affect ASSIGNMENT , why?
```
var properCamelCase;
PRoperCAmeLcaSe = 10;  
properCamelCase;   // still returns undefined, because these are 2 different variables
```


#### Initializing Variables with the Assignment Operator (=)

* These Variables are   UNINITIALIZED (that means they are declared but not given values)
```
var a;
var b;
var c;
```

* Initialize them using the Assignment Operator `=`
```
var a = 5;
var b = 10;
var c = "I am a";
```

* Do Arithmatic operations 
```
a = a + 1;   // it returns 6 
b = b + 14;  // it returns 24
c = c + " string";   // notice how we CONCATINATED 2 strings together using (+)
```

#### Shortcut for Arithmatic operation with assigning values
### Adding numbers
```
var a = 3;
a = a + 12;   // variable a now returns 15
```

### Subtracting numbers
```
var a = 25;
a = a - 15;   // a now returns 10
```

### Multiplying numbers
use the star symbol `*` to multiply numbers
```
var product = 8 * 10;  // returns 80
```

### Dividing numbers
divide numbers using slash symbol `/`
```
var quotient = 66 / 2;  // returns 33
```

### Incrementing numbers

```
myVar = 87;

// Increment the number using `+1` 
myVar = myVar + 1;

// or by adding `++` after the variable name
myVar++;
```

### Decrementing numbers
the same ways apply to decrementing a number:
```
myVar = myVar - 1;

// or

myVar--;
```

### Decimal numbers
in JavaScript a Decimal number is any number that has a Decimal Point
```
var ourDecimal = 5.7;
var myDecimal = 0.33334;
```

### Multiply Decimals
Decimals and Integers, are both multiplied using `*`
```
var myProduct = 2.3 * 4;   
console.log(myProduct);   // returns 9.2
```

### Divide Decimals
Decimals and Integers, are both divided using `/`
```
var myQuotient = 4.88 / 2.0;   
console.log(myQuotient);   // returns 2.44
```

## Finding a Remainder
_a **Remainder** is the integer "left over" after dividing one integer by another to produce an integer quotient_
- in JS Modulo operator is this symbol `%`
```
var remainder;
remainder = 11 % 3;   // returns 2
// because 11 has three times of 3 , and the left over is 2
```

### Remainder to decide if the number is Odd or Even
> **Even** if you devide the number by 2 and the remainder is 0
> **Odd** if you divide the number by 2 and the remainder is > 0
```
var testOddEven;
testOddEven = 243 % 2;   // returns 1  --> it is Odd

var testOddEven;
testOddEven = 360 % 2;   // returns 0  --> it is Even
```

### compound Assignment with Augmented Addition

basically we use Assignment symbol `=` and addition `+`
```
var a = 11;
a = a + 12;
```

 `+=`  is a Shortcut  to add a value to the variable and assigning the answer to that variable.
```
a += 12;
```

### compound Assignment with Augmented Subtraction
`-=`  do the same thing but subtracting
```
var b = 9;
b = b - 4;
```
or
```
b -= 4;
```


### compound Assignment with Augmented Multiplication
`*=`  do the same thing but multiplying
```
var c = 12;
c = c * 3;
```
or
```
c *= 3;
```




### compound Assignment with Augmented Divition
`/=`  do the same thing but dividing
```
var d = 81;
d = d / 9;
```
or
```
d *= 9;
```



## Strings
to declare a STRING variable wrap its value with either:
`double quotation marks ""`
`single quotation marks ''`
`backticks `` `


```
var firstName = "Hany";
var lastName = 'Afifi';
var fullName = `Hany Afifi`;
```

### Escaping Literal Quotes in strings
> use ESCAPE CHARACTERS to help JS recognize the quotation marks correctly
> put `double quotes` inside  `single quotes`
> put both `double quotes` and `single quotes`  inside `backticks`