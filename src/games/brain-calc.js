import { cons } from '@hexlet/pairs';
import generateRandomInt from '../utils';

const calculateExpression = (expr) => {
  const [a, operator, b] = expr.split(' ');
  switch (operator) {
    case ('+'):
      return +a + +b;
    case ('-'):
      return a - b;
    default:
      return a * b;
  }
};

const loseCalcMessage = (userAnswer, correctAnswer, username) => {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${username}!`);
};

const generateRandomOper = () => {
  switch (Math.round(Math.random() * 3)) {
    case (0):
      return '+';
    case (1):
      return '-';
    default:
      return '*';
  }
};

const generateRandomExpr = () => `${generateRandomInt()} ${generateRandomOper()} ${generateRandomInt()}`;

const prepareQuestion = () => {
  const expression = generateRandomExpr();
  const rightAnswer = calculateExpression(expression);
  return cons(expression, rightAnswer.toString());
};

export default {
  rule: 'What is the result of the expression ?\n',
  question: prepareQuestion,
  loseMessage: loseCalcMessage,
};
