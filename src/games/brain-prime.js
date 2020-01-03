import { cons } from '@hexlet/pairs';
import generateRandomInt from '../utils';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const calculateExpression = (question) => {
  if (isPrime(question)) {
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
  rule: 'Answer "yes" if the number is prime, otherwise answer "no".\n',
  question: prepareQuestion,
};
