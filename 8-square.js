#!/usr/bin/env node

const args = process.argv;
const size = parseInt(args[2]);

for (let i = 0; i < (isNaN(size) ? 1 : size); i++) {
  console.log(isNaN(size) ? "Missing size" : "x".repeat(size));
}
