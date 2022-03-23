# JS Documentation

## Array properties and Methods

**CONCAT**
combine two arrays
**reverse**
change the order of elements in array
**unshift**
to add an item to the begining of an array
**shift**
to remove an item from the begining of an array
**push**
to add an item to the end of an array
**pop**
to remove an item form the end of an array
**splice**
mutates original array
takes two values 1. starting point/index, 2.how many items need to remove
eg: item.splice(1,2) = this remove item from index 1 and remove two items ie index1, index2

## reference vs value
in js there are two diffrent data types

primitve - string, number,boolean,undefined,null,symbol / done by value
for primitive data type any changes made to the varaible will change the value without affecting the original value

object - Arrays, functions,Objects / done by reference
for non primitive data type value to variable done by reference so changes will affect all references;
in ES6 there is way to bypass refernce type  and that is spread operator.
let person = {name:"bob"};
let person2 ={...person};
person2.name = "susy";
here we are not pointing to the person only passing/copying the value of person to person2
this will changes only the second object not the first object.

to check the datatype we use **typeof()**

## null and undefined
both represents no value

### undefined 
js can't find value for this
ie 
variable without value
missing fn arguments
missing obj properties

### null
developer sets the value

## Truthy and falsy values in js
empty string - '',"",``
false
null
0,-0,undefined,NaN

## unary operator
it has only one operand
let text = "something"
eg: console.log(typeof text);

## binary operator/assignment
it has two operand
 let num = 3;
 let num2 = 2+3;

## ternary operator
(condition) ?  true : false

## Global scope
any variable declared outside {} is in global scope
can access these variable from anywhere in the program

it some time causes name collission and by mistake reassigning values

## local scope
these variables cant access from outside code blocks

## variable lookup
js look for variables in function scope/block scope initially then only it goes for global scope

