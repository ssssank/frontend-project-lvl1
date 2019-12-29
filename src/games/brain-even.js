import generateRandomInt from '../utils';

const generateRandomNumber = () => generateRandomInt();

const isEven = (number) => number % 2 === 0;

const loseEvenMessage = (userAnswer, generatedNumber, username) => {
  const rightAnswer = isEven(generatedNumber) ? 'yes' : 'no';
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
  console.log(`Let's try again, ${username}!`);
};

const isCorrectEvenAnswer = (answer, question) => {
  if ((answer === 'yes' && isEven(question)) || (answer === 'no' && !isEven(question))) {
    return true;
  }
  return false;
};

export default {
  rule: 'Answer "yes" if the number is even, otherwise answer "no".\n',
  question: generateRandomNumber,
  isCorrectAnswer: isCorrectEvenAnswer,
  loseMessage: loseEvenMessage,
};
