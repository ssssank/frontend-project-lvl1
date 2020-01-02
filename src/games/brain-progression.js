import { cons } from '@hexlet/pairs';
import generateRandomInt from '../utils';

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
  return cons(progression.join(' '), rightAnswer.toString());
};

export default {
  rule: 'What number is missing in the progression?\n',
  question: prepareQuestion,
};
