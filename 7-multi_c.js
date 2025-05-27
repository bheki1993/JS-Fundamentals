#!/usr/bin/node
const args = process.argv;
const x = parseInt(args[2]);

for (let i = 0; i < (isNaN(x) ? 1 : x); i++) {
  console.log(isNaN(x) ? "Missing number of occurrences" : "C is fun");
}


