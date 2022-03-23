## changing css with style property
if we adding css with style property we need to add each style line by line .this is verbos.so its better to use classList
## Events overview
### select element
### addEventListener()- in this we need to pass the event and call back function.
we use call back function when we dont want to run the function right away. we need to run the function ony when an event takes place

### click,mousedown,mouseup,mouseenter,mouseleave

### key events/with inputs = keydown,keypress,keyup

whenever we work with events in js, in cb fn will get event object as an argument. This carries all the information about the triggered event.
some of  useful event methods/values
### e.currentTarget
### e.type
### e.preventDefault() - prevents default behaviour of the page

## this keyword - doesnt work with arrow function
this keyword indicates the current object

## difference between currentTarget and target
currentTraget - always refers to the lement to which the event is attached to, for cuurentTraget it will consider both nested element and element as one and apply the class to both. it wont seperate the nested element as another element will consider as sinle unit
eg: 
<button class="btn">Secon button<strong>Nested element</strong></button>
target - identifies the element on which event occured, if the element has nested with other elements it behaves diffrenetly, if we cick the nested element the class wil apply only to the nested element

## ways of selecting dynamic elements / selecting elements without even targeting them
1. event propagation : order the events are fired

2. event bubbling : clicked element first then bubbles up and this is the default behaviour. we can prevent it using e.stopPropagation();
if we apply the event handler to the parent it automatically gets applied to the child element.when we click the child element the taget is the child element and currentTarget is the parent element.
<ul class="list-items">
    <li class="item">List1</li>
    <li class="item">List1</li>
    <li class="item">List1</li>
</ul>
const list = document.querySelector('.list-items');
list.addEventListener('click',(e)=>{
console.log(e.currentTarget);
console.log(e.target);
})
in this scenario while clicking on li will get target as li and currentTarget as ul

3. event capturing : fires at the root and fires until reaches target - its similar to bubbling but the opposite way. its starts from parent to child
to set this we pass a third argument {capture:true} to the addEventListener function


### form 
need to do e.preventDefault() to prevent default behaviour while form submission
acces avlue using name.value




