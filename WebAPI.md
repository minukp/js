## Web storage API
## Local Storage : remains the value in local storage till the browser remains open/persist data in between opening and closing the browser
## Session storage : the value will be lost as soon as we close the tab
## Methods remain same for both the storages , setItem,getItem,clear, removeItem
## value stored as key:value pair
eg: 
localStorage.setItem('name','john');
sessionStorage.setItem('name','john');

## JSON.stringify() - convert value to json string
when you are saving an array/object  value to localstorage do JSON.stringify()
localStorage.setItem('friends',JSON.stringify(fruits))
## JSON.parse() - parsing json to initial value
while getting back data using geItem use JSON.parse()
JSON.parse(localStorage.getItem('fruits'))


