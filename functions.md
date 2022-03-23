## functions are first class objects
fn can be stored in a variable (expression)
fn can be passed as an argument to another fn
fn can be returned from the function

## higher order function
accepts another fn as an argument or returns another fn as a result

## callback fn
passed to an another fn as an argument and executed inside that function

the function which we passed into is higher order fn and the function which we passed in as argument is called as the callback function

## Powerfull array methods
### forEach 
foreach doesnot return a new array
### map
does return a new array
doesn't change the size of the new array
use values from original array when making new one
the size of the new array always depends upon the original array
### filter
it also creates a new array
can manipulae the size of the new array
in filter we return item based on condition
if none of the items match the condition we get an empty array
### find
return a single instance (sometime its an object)
returns the first match, if no match returns undefined
great for getting a unique value
### reduce
it iterated over an array, it also uses a cb function
it reduces the array to a single value
in cb fn it takes two parameter accumaltor and current 
accumalator - total of all calculations
current indicates cuurent iteration or value
always return accumalator in the cb fn

