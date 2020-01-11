import { cons } from '@hexlet/pairs';
import generateRandomInt from '../utils';
import startGame from '..';

const rule = 'What is the result of the expression?';

const operators = ['+', '-', '*'];
const maxNumberDefault = 50;
const maxNumberForMultiply = 11;

const getRightAnswer = (firstNumber, secondNumber, operator) => {
  switch (operator) {
    case ('+'):
      return +firstNumber + +secondNumber;
    case ('-'):
      return firstNumber - secondNumber;
    case ('*'):
      return firstNumber * secondNumber;
    default:
      return null;
  }
};

const generateRandomOper = () => operators[generateRandomInt(0, operators.length)];

const prepareRound = () => {
  const operator = generateRandomOper();
  const maxNumberForGeneration = operator === '*' ? maxNumberForMultiply : maxNumberDefault;
  const firstNumber = generateRandomInt(0, maxNumberForGeneration);
  const secondNumber = generateRandomInt(0, maxNumberForGeneration);
  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const rightAnswer = getRightAnswer(firstNumber, secondNumber, operator);
  return cons(question, rightAnswer.toString());
};

export default () => startGame(rule, prepareRound);
