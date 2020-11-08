# Learn JavaScript - Full Course for Beginners
##  course by freeCodeCamp.org
[Link](https://www.youtube.com/watch?v=PkZNo7MFNFg)
*Summary made by Hany Afifi*

 *Notice: Always end lines with semicolon* `;`

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


#### Declaring and Assigning Variables
1. Declare a variable using: `var` , `let` or `const`
```
var a;
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

* Do Arithmatic operations (you can even mention the variable name on both sides)
```
a = a + 1;   // it returns 6 
b = b + 14;  // it returns 24
c = c + " string";   // notice how we CONCATINATED 2 strings together using (+)
```
