import { cons } from '@hexlet/pairs';
import generateRandomInt from '../utils';

const isEven = (number) => number % 2 === 0;

const calculateExpression = (question) => {
  if (isEven(question)) {
    return 'yes';
  }
  return 'no';
};

const prepareQuestion = () => {
  const expression = generateRandomInt();
  const rightAnswer = calculateExpression(expression);
  return cons(expression, rightAnswer);
};

export default {
  rule: 'Answer "yes" if the number is even, otherwise answer "no".\n',
  question: prepareQuestion,
};
