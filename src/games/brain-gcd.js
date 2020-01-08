import { cons } from '@hexlet/pairs';
import generateRandomInt from '../utils';
import startGame from '..';

const rule = 'Find the greatest common divisor of given numbers.\n';

const gcd = (firstNumber, secondNumber) => {
  if (secondNumber > 0) {
    return gcd(secondNumber, firstNumber % secondNumber);
  }
  return +firstNumber;
};

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
