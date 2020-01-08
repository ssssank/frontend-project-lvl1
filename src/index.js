import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';
import brainCalc from './games/brain-calc';
import brainEven from './games/brain-even';
import brainGcd from './games/brain-gcd';
import brainProgression from './games/brain-progression';
import brainPrime from './games/brain-prime';

const gamesMap = {
  'brain-even': brainEven,
  'brain-calc': brainCalc,
  'brain-gcd': brainGcd,
  'brain-progression': brainProgression,
  'brain-prime': brainPrime,
};

export const getUsername = () => {
  const username = readlineSync.question('May I have your name? ');
  return username || 'anonymous';
};

export const game = (gameName) => {
  const currentGame = gamesMap[gameName];
  const winAnswersNumber = 3;

  console.log('Welcome to the Brain Games!');
  console.log(currentGame.rule);

  const username = readlineSync.question('May I have your name? ') || 'anonymous';
  console.log(`Hello, ${username}!\n`);

  let correctAnswerCounter = 0;

  while (correctAnswerCounter < winAnswersNumber) {
    const questionWithAnswer = currentGame.question();
    const question = car(questionWithAnswer);
    const correctAnswer = cdr(questionWithAnswer);

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ').toString();

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      correctAnswerCounter += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${username}!`);
      break;
    }
  }

  if (correctAnswerCounter === winAnswersNumber) {
    console.log(`Congratulations, ${username}!`);
  }
};
