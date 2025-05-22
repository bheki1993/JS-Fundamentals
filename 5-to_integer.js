#!/usr/bin/env node

const arg = process.argv[2];

myNumber = Number(arg);

if (!isNaN(myNumber) && Number.isInteger(myNumber)) {
  console.log(`My number: ${myNumber}`);
} else {
  console.log("Not a number");
}