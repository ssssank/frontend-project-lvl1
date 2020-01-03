import { cons } from '@hexlet/pairs';
import generateRandomInt from '../utils';

const rule = 'Find the greatest common divisor of given numbers.\n';

const getRightAnswer = (expr) => {
  const [firstNumber, secondNumber] = expr.split(' ');
  if (secondNumber > 0) {
    return getRightAnswer(`${secondNumber} ${firstNumber % secondNumber}`);
  }
  return +firstNumber;
};

const generateRandomGcdExpr = () => `${generateRandomInt()} ${generateRandomInt()}`;

const prepareQuestion = () => {
  const question = generateRandomGcdExpr();
  const rightAnswer = getRightAnswer(question);
  return cons(question, rightAnswer.toString());
};

export default {
  rule,
  question: prepareQuestion,
};
