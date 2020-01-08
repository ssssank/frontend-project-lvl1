import { cons } from '@hexlet/pairs';
import generateRandomInt from '../utils';

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

export default {
  rule,
  question: prepareQuestion,
};
