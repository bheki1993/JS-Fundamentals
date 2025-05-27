#!/usr/bin/env node

const args = process.argv;

const calcAdd = function(num1,  num2){
   let add = num1 + num2
    return add
}
const num1 = parseInt(args[2]);
const num2 = parseInt(args[3]);

if (isNaN(num1) || isNaN(num2)) {
  console.log("NaN");
} else {
  console.log(calcAdd(num1, num2));
}