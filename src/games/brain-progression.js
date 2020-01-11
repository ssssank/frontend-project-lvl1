import { cons } from '@hexlet/pairs';
import generateRandomInt from '../utils';
import startGame from '..';

const rule = 'What number is missing in the progression?';
const progressionLength = 10;

const generateRandomProgression = (length) => {
  const progressionStart = generateRandomInt();
  const progressionStep = generateRandomInt();
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(progressionStart + progressionStep * i);
  }
  return progression;
};

const prepareRound = () => {
  const progression = generateRandomProgression(progressionLength);
  const randomIndex = generateRandomInt(0, 10);
  const rightAnswer = progression[randomIndex];
  progression[randomIndex] = '..';
  return cons(progression.join(' '), rightAnswer.toString());
};

export default () => startGame(rule, prepareRound);
