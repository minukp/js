## DOM - Document object model
The browser convert html into DOM, which is a tree like structure with nodes
to access the nodes we use document.methods this return s a node list or node objects
we have mthods to change node object to node list

### window object is browser api
it give us the methods and properties that we can use to access the browser and work with the browser

### document
within the window object we have the document object.
window reperesnts the tab we are working with and document represents the doc we are working with. so we can acces body, head,html element etc

to check the properties and methods related to node obejct we can use 
### console.dir(document)

## select the element

### document.getElementById('');

### getElementsByTagName('tagname') - HTML collection /array like object
this returns an HTML collection whcih is like an array like object
we can use index and length property with this, but not other array methods
eg: items.length;
items[0].style.color = "red";
with nodelist we can't use array methods like foreach to use this we need to transform the nodelist into an array.
one way of doing this is using the spread operator
eg:
 const items = document.getElementsByTagName('li');
 cant use items.forEach ; so we transform it using [...items]
 const newItems = [...items]; now we can use forEach

 ###  getElementsByClassName('className') - HTML collection/array like object

 this is similar to getElementsByTagName

 ### querySelector / selects a single element
 ### querySelectorAll / selects all - this retuns a nodelist 
 we can apply array methods like foreach here

 # Traversing the DOM tree
 ## childNodes - return all childnodes including whitespace, and whitespace is treated as a text node
 eg: const result = document.querySelector("#result");
 const children = result.childNodes;
 ## children
 if we use children this will return only child nodes. and output is an HTML collection
 eg :: const children = result.children;

 ## firstChild & lastChild / both includes white space which is treated as a text node

 ## parentElement
eg: const heading = document.querySelector('h2');
console.log(heading.parentElement);

## previousSibling,nextSibling
returns text node/white space
## previousElementsibling,nextElementSibling
this  directly select the element not the whitespace

## node value and text content
this is used to get the text content inside a node
text conetnt is more direct than node value, with node value its bit tricky to get the text value

const value = document.querySelector('.special');
with node value;
const text = value.firstChild.nodeValue;
const text = value.textContent;

## getAttribute(), setAttribute()
specify the attribute you want to edit or see
value.getAttribute('class');
value.setAttribute('class','special');

## adding/ removing/checking classes dynamically

### className

to check the className on an element we use className

const title = document.getElementById('title');
const classValue = title.className;
console.log(classValue);

to add a class we can do : title.className = 'color';
if we do the following way the second class will override the first written class : title.className = 'text';
we can also add two classes at a time  : title.className = 'color text';

### classList
if we add classes with classList the first value wont get overwritten by second value . to add the class we need to use add keyword

ie  title.classList.add('colors');
title.classList.add('text');
to add two/more class at a time : title.classList.add('colors','text');

to remove classes : title.classList.remove('colors');
to check the classes : title.classList.contains('color');

const classValue = title.classList; - this iwll displays the class values

## adding elements dynamically
### createElement - this will create a new element = document.createElement('h2')
### createTextNde = this will create a tetx node = document.createTextNode('new h2')
### appendChild = this will append the childElement = heading.appendChild(headingText);
to append this to body = document.body.appendChild(heading);
if you want to append this to any other element = result.appendChild(heading);

indorder to append child element we can also use insertBefore
### insertBefore('element','location')
document.body.insertBefore(heading,result);
result.insertBefore(bodyDiv,red);

### replaceChild('new','old')
document.body.replaceChild(smHeading,bodyDiv);

### prepend(),innerText
to insert before a particular element
const heading = docuemnt.createElement('h2');
heading.innerText = "hello all";
document.body.prepend(heading);

### remove,removeChild() = remove element from node

## innerHTML, textContent
### innerHTML - this will show all html content
### textConetnt = this will show only the inner text content



