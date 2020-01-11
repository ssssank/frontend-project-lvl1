import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

export default (currentGame) => {
  const winAnswersNumber = 3;

  console.log('Welcome to the Brain Games!');
  console.log(`${currentGame.rule}\n`);

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
