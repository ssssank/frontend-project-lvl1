import { cons } from '@hexlet/pairs';
import generateRandomInt from '../utils';
import startGame from '..';

const rule = 'Answer "yes" if the number is prime, otherwise answer "no".';

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

const getRightAnswer = (question) => (isPrime(question) ? 'yes' : 'no');

const prepareRound = () => {
  const question = generateRandomInt();
  const rightAnswer = getRightAnswer(question);
  return cons(question, rightAnswer);
};

export default () => startGame(rule, prepareRound);
