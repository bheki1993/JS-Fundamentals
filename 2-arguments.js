#!/usr/bin/env node

const Arguments = process.argv.slice(2);

if (Arguments.length === 0) {
  console.log("No argument");
} else if (Arguments.length === 1) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}
