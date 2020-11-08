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
- Variables are declared `given a name` using:  var ,  let or const

**var**
is used throughout the whole program
`var myName = "Hany";`

**let**
is only used within the _scope_ where you declare it
`let myCourse = "Free Code Camp";`

**const**
a constant, that means you can not change it later
`const pi = 3.14;`


#### Declaring and Assigning Variables
1. Declare a variable using: `var` , `let` or `const`
`var a;`

2. Declare new variable and Assign its value using `=` , this is called INITIALIZAING
`var b = 5;`

3. you can check the variable value in  _**Console**_ by mentioning its name
`a;`  `//This returns undefined`

4. You can assign a value to an already declared variable
```
var a = 7;
