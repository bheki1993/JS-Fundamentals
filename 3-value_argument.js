#!/usr/bin/env node

const arguments = process.argv[2]

if(arguments === undefined){
    console.log("No argument");
}else{
    console.log(arguments);
}