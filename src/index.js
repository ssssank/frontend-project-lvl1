import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';
import brainCalc from './games/brain-calc';
import brainEven from './games/brain-even';
import brainGcd from './games/brain-gcd';
import brainProgression from './games/brain-progression';

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

const showWinMessage = (username) => {
  console.log(`Congratulations, ${username}!`);
};

const showLoseMessage = (userAnswer, correctAnswer, username) => {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${username}!`);
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

  let correctAnswerCounter = 0;

  while (correctAnswerCounter < winAnswersNumber) {
    const questionPair = currentGame.question();
    const currentQuestion = car(questionPair);
    const correctAnswer = cdr(questionPair);
    showQuestion(currentQuestion);
    const answer = getAnswer().toString();

    if (answer === correctAnswer) {
      console.log('Correct!');
      correctAnswerCounter += 1;
    } else {
      showLoseMessage(answer, correctAnswer, username);
      break;
    }
  }

  if (correctAnswerCounter === winAnswersNumber) {
    showWinMessage(username);
  }
};
