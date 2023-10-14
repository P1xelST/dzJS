"use strict";
let sett = new Set([
    {id:1, name:'Vasy'},
    {id:2, name:'Pety'},
    {id:1, name:'Vasy'},
]);
console.log(Array.from(sett))
let uniqueItems = Array.from(sett)
    .map(item => item.id)
    .filter((el, index, arr) => arr.indexOf(el) === index) 
    .map(id => Array.from(sett).find(item => item.id === id)); 
console.log(uniqueItems)

let stringifiedItems = Array.from(sett).map(item => JSON.stringify(item));
let uniqueStringifiedItems = [...new Set(stringifiedItems)];
let uniqueItems1 = uniqueStringifiedItems.map(item => JSON.parse(item));

console.log(uniqueItems1)