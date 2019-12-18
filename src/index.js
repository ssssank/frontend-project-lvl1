import readlineSync from 'readline-sync';

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

const loseMessage = (userAnswer, generatedNumber, username) => {
  const rightAnswer = isEven(generatedNumber) ? 'yes' : 'no'
  console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
  console.log(`Let's try again, ${username}!`);
};

const generateRandomInt = () => {
  return parseInt(Math.random() * 50);
};

const showQuestion = (question) => {
  console.log(`Question: ${question}`);
};

const isEven = (number) => {
  return number % 2 === 0;
};

const isCorrectEvenAnswer = (answer, number) => {
  if (answer === 'yes' && isEven(number) || answer === 'no' && !isEven(number)) {
    return true;
  }
  return false;
};

export const startBrainEven = () => {
  const winAnswersNumber = 3;
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if the number is even, otherwise answer "no".\n');

  const username = getUsername();
  console.log(`Hello, ${username}!\n`);

  let rightAnswerCounter = 0;

  while (rightAnswerCounter < winAnswersNumber) {
    let randomNumber = generateRandomInt();
    showQuestion(randomNumber);
    const answer = getAnswer();
    if (isCorrectEvenAnswer(answer, randomNumber)) {
      console.log('Correct!');
      rightAnswerCounter += 1;
    } else {
      loseMessage(answer, randomNumber, username);
      break;
    }
  }

  if (rightAnswerCounter === winAnswersNumber) {
    winMessage(username);
  } 
}