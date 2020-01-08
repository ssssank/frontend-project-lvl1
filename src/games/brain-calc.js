import { cons } from '@hexlet/pairs';
import generateRandomInt from '../utils';

const rule = 'What is the result of the expression ?\n';

const getRightAnswer = (firstNumber, secondNumber, operator) => {
  switch (operator) {
    case ('+'):
      return +firstNumber + +secondNumber;
    case ('-'):
      return firstNumber - secondNumber;
    default:
      return firstNumber * secondNumber;
  }
};

const generateRandomOper = () => {
  switch (Math.round(Math.random() * 3)) {
    case (0):
      return '+';
    case (1):
      return '-';
    default:
      return '*';
  }
};

const prepareQuestion = () => {
  const operator = generateRandomOper();
  let firstNumber, secondNumber;
  if (operator === '*') {
    firstNumber = generateRandomInt(2, 11);
    secondNumber = generateRandomInt(2, 11)
  } else {
    firstNumber = generateRandomInt();
    secondNumber = generateRandomInt();
  }
  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const rightAnswer = getRightAnswer(firstNumber, secondNumber, operator);
  return cons(question, rightAnswer.toString());
};

export default {
  rule,
  question: prepareQuestion,
};
