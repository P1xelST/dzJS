"use strict";
function dice(d) {
    let res = d.slice(1)
    return Math.floor((Math.random() * Number(res)) + 1);
}
console.log(dice('d4'));
console.log(dice('d6'));
console.log(dice('d8'));
console.log(dice('d10'));
console.log(dice('d12'));
console.log(dice('d16'));
console.log(dice('d20'));