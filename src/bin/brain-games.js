#!/usr/bin/env node
import { getUsername } from '..';

console.log('Welcome to the Brain Games!\n');

const username = getUsername();
console.log(`Hello, ${username}!`);
