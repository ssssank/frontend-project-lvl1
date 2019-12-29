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
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${calculateExpression(correctAnswer)}'.`);
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

const isCorrectCalcAnswer = (answer, question) => {
  const correctAnswer = calculateExpression(question);
  if (+answer === correctAnswer) {
    return true;
  }
  return false;
};

export default {
  rule: 'What is the result of the expression ?\n',
  question: generateRandomExpr,
  isCorrectAnswer: isCorrectCalcAnswer,
  loseMessage: loseCalcMessage,
};
