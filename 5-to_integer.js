#!/usr/bin/env node

const arg = process.argv[2];

myNumber = Number(arg);

if (isNaN(myNumber)){
    console.log('Not a number');
}else{
    console.log(myNumber);
}