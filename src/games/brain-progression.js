import { cons } from '@hexlet/pairs';
import getRandomInt from '../utils';
import startGame from '..';

const rule = 'What number is missing in the progression?';
const progressionLength = 10;

const getProgression = (length, start, step) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const prepareRound = () => {
  const progressionStart = getRandomInt();
  const progressionStep = getRandomInt();
  const progression = getProgression(progressionLength, progressionStart, progressionStep);
  const randomIndex = getRandomInt(0, progressionLength);
  const rightAnswer = progression[randomIndex];
  progression[randomIndex] = '..';
  return cons(progression.join(' '), rightAnswer.toString());
};

export default () => startGame(rule, prepareRound);
