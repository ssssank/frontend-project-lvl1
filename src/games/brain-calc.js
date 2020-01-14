import { cons } from '@hexlet/pairs';
import getRandomInt from '../utils';
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

const getRandomOper = () => operators[getRandomInt(0, operators.length - 1)];

const prepareRound = () => {
  const operator = getRandomOper();
  const maxNumberForGeneration = operator === '*' ? maxNumberForMultiply : maxNumberDefault;
  const firstNumber = getRandomInt(0, maxNumberForGeneration);
  const secondNumber = getRandomInt(0, maxNumberForGeneration);
  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const rightAnswer = getRightAnswer(firstNumber, secondNumber, operator);
  return cons(question, rightAnswer.toString());
};

export default () => startGame(rule, prepareRound);
