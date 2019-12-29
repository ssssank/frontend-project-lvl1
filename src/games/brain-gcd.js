import generateRandomInt from '../utils';

const calculateGcdExpression = (expr) => {
  const [firstNumber, secondNumber] = expr.split(' ');
  if (secondNumber > 0) {
    return calculateGcdExpression(`${secondNumber} ${firstNumber % secondNumber}`);
  }
  return +firstNumber;
};

const loseGcdMessage = (userAnswer, correctAnswer, username) => {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${calculateGcdExpression(correctAnswer)}'.`);
  console.log(`Let's try again, ${username}!`);
};

const isCorrectGcdAnswer = (answer, question) => {
  const correctAnswer = calculateGcdExpression(question);
  if (+answer === correctAnswer) {
    return true;
  }
  return false;
};

const generateRandomGcdExpr = () => `${generateRandomInt()} ${generateRandomInt()}`;

export default {
  rule: 'Find the greatest common divisor of given numbers.',
  question: generateRandomGcdExpr,
  isCorrectAnswer: isCorrectGcdAnswer,
  loseMessage: loseGcdMessage,
};
