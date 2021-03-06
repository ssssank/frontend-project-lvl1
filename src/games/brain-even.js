import { cons } from '@hexlet/pairs';
import getRandomInt from '../utils';
import startGame from '..';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getRightAnswer = (question) => (isEven(question) ? 'yes' : 'no');

const prepareRound = () => {
  const question = getRandomInt();
  const rightAnswer = getRightAnswer(question);
  return cons(question, rightAnswer);
};

export default () => startGame(rule, prepareRound);
