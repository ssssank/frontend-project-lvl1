import { cons } from '@hexlet/pairs';
import generateRandomInt from '../utils';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".\n';

const isEven = (number) => number % 2 === 0;

const getRightAnswer = (question) => {
  if (isEven(question)) {
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
