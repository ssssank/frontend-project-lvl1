#!/usr/bin/env node
import askUsername from '..';

console.log('Welcome to the Brain Games!\n');

const username = askUsername();
console.log(`Hello, ${username}!`);
