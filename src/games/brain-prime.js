import { cons } from '@hexlet/pairs';
import generateRandomInt from '../utils';

const rule = 'Answer "yes" if the number is prime, otherwise answer "no".\n';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getRightAnswer = (question) => {
  if (isPrime(question)) {
    return 'yes';
  }
  return 'no';
};

const prepareQuestion = () => {
  const question = generateRandomInt();
  const rightAnswer = getRightAnswer(question);
  return cons(question, rightAnswer);
};

export default {
  rule,
  question: prepareQuestion,
};
