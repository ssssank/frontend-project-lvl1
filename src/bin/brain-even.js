#!/usr/bin/env node
import askUsername from '..';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if the number is even, otherwise answer "no".\n');

const username = askUsername();
console.log(`Hello, ${username}!`);