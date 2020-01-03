import { cons } from '@hexlet/pairs';
import generateRandomInt from '../utils';

const rule = 'What is the result of the expression ?\n';

const getRightAnswer = (expr) => {
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
  const question = generateRandomExpr();
  const rightAnswer = getRightAnswer(question);
  return cons(question, rightAnswer.toString());
};

export default {
  rule,
  question: prepareQuestion,
};
