import generateRandomInt from '../utils';
import { cons } from '@hexlet/pairs';

const loseProgressionMessage = (userAnswer, correctAnswer, username) => {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${username}!`);
};

const isCorrectProgressionAnswer = (answer, correctAnswer) => {
  if (+answer === correctAnswer) {
    return true;
  }
  return false;
};

const generateRandomProgression = (progressionLength) => {
  const progressionStart = generateRandomInt();
  const progressionStep = generateRandomInt();
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(progressionStart + progressionStep * i);
  }
  return progression;
};

const prepareQuestion = () => {
  const progressionLength = 10;
  const progression = generateRandomProgression(progressionLength);
  const randomIndex = generateRandomInt(progressionLength);
  const rightAnswer = progression[randomIndex];
  progression[randomIndex] = '..';
  return cons(progression.join(' '), rightAnswer);
};

export default {
  rule: 'What number is missing in the progression?',
  question: prepareQuestion,
  isCorrectAnswer: isCorrectProgressionAnswer,
  loseMessage: loseProgressionMessage,
};
