import readlineSync from 'readline-sync';
import brainCalc from './games/brain-calc';
import brainEven from './games/brain-even';
import brainGcd from './games/brain-gcd';
import brainProgression from './games/brain-progression';
import { car, cdr } from '@hexlet/pairs';

const gamesMap = {
  'brain-even': brainEven,
  'brain-calc': brainCalc,
  'brain-gcd': brainGcd,
  'brain-progression': brainProgression,
};

export const getUsername = () => {
  const username = readlineSync.question('May I have your name? ');
  return username;
};

const getAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

const winMessage = (username) => {
  console.log(`Congratulations, ${username}!`);
};

const showQuestion = (question) => {
  console.log(`Question: ${question}`);
};

export const game = (gameName) => {
  const currentGame = gamesMap[gameName];
  const winAnswersNumber = 3;
  console.log('Welcome to the Brain Games!');
  console.log(currentGame.rule);

  const username = getUsername();
  console.log(`Hello, ${username}!\n`);

  let rightAnswerCounter = 0;

  while (rightAnswerCounter < winAnswersNumber) {
    const questionPair = currentGame.question()
    const currentQuestion = car(questionPair);
    const rightAnswer = cdr(questionPair);
    showQuestion(currentQuestion);
    const answer = getAnswer().toString();
    if (answer === rightAnswer) {
      console.log('Correct!');
      rightAnswerCounter += 1;
    } else {
      currentGame.loseMessage(answer, rightAnswer, username);
      break;
    }
  }

  if (rightAnswerCounter === winAnswersNumber) {
    winMessage(username);
  }
};
