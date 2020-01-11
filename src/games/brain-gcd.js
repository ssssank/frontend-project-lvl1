import { cons } from '@hexlet/pairs';
import generateRandomInt from '../utils';
import startGame from '..';

const rule = 'Find the greatest common divisor of given numbers.';

const gcd = (first, second) => (second > 0 ? gcd(second, first % second) : first);

const prepareQuestion = () => {
  const firstNumber = generateRandomInt();
  const secondNumber = generateRandomInt();
  const question = `${firstNumber} ${secondNumber}`;
  const rightAnswer = gcd(firstNumber, secondNumber);
  return cons(question, rightAnswer.toString());
};

const game = {
  rule,
  question: prepareQuestion,
};

export default () => startGame(game);
