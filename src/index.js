import readlineSync from 'readline-sync';
import brainCalc from './games/brain-calc';
import brainEven from './games/brain-even';

const gamesMap = {
  'brain-even': brainEven,
  'brain-calc': brainCalc,
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
    const currentQuestion = currentGame.question();
    showQuestion(currentQuestion);
    const answer = getAnswer();
    if (currentGame.isCorrectAnswer(answer, currentQuestion)) {
      console.log('Correct!');
      rightAnswerCounter += 1;
    } else {
      currentGame.loseMessage(answer, currentQuestion, username);
      break;
    }
  }

  if (rightAnswerCounter === winAnswersNumber) {
    winMessage(username);
  }
};
