import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

export default (rule, prepareRound) => {
  const winAnswersNumber = 3;

export default (rule, prepareRound) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${rule}\n`);

  const username = readlineSync.question('May I have your name? ') || 'anonymous';
  console.log(`Hello, ${username}!\n`);

  for (let i = 0; i < winAnswersNumber; i += 1) {
    const questionWithAnswer = prepareRound();
    const question = car(questionWithAnswer);
    const correctAnswer = cdr(questionWithAnswer);

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ').toString();

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${username}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${username}!`);
};
