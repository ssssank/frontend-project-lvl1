import generateRandomInt from '../utils';
import { cons } from '@hexlet/pairs';

const calculateGcdExpression = (expr) => {
  const [firstNumber, secondNumber] = expr.split(' ');
  if (secondNumber > 0) {
    return calculateGcdExpression(`${secondNumber} ${firstNumber % secondNumber}`);
  }
  return +firstNumber;
};

const loseGcdMessage = (userAnswer, correctAnswer, username) => {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${username}!`);
};

const generateRandomGcdExpr = () => `${generateRandomInt()} ${generateRandomInt()}`;

const prepareQuestion = () => {
  const expression = generateRandomGcdExpr();
  const rightAnswer = calculateGcdExpression(expression);
  return cons(expression, rightAnswer.toString());
};

export default {
  rule: 'Find the greatest common divisor of given numbers.',
  question: prepareQuestion,
  loseMessage: loseGcdMessage,
};
