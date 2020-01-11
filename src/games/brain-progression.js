import { cons } from '@hexlet/pairs';
import generateRandomInt from '../utils';
import startGame from '..';

const rule = 'What number is missing in the progression?';
const progressionLength = 10;

const generateProgression = (length, start, step) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const prepareRound = () => {
  const progressionStart = generateRandomInt();
  const progressionStep = generateRandomInt();
  const progression = generateProgression(progressionLength, progressionStart, progressionStep);
  const randomIndex = generateRandomInt(0, progressionLength);
  const rightAnswer = progression[randomIndex];
  progression[randomIndex] = '..';
  return cons(progression.join(' '), rightAnswer.toString());
};

export default () => startGame(rule, prepareRound);
