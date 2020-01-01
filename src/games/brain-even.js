import generateRandomInt from '../utils';
import { cons } from '@hexlet/pairs';

const isEven = (number) => number % 2 === 0;

const loseEvenMessage = (userAnswer, correctAnswer, username) => {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${username}!`);
};

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
  loseMessage: loseEvenMessage,
};
