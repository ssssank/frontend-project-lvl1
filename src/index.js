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

const isEven = (number) => number % 2 === 0;

const loseEvenMessage = (userAnswer, generatedNumber, username) => {
  const rightAnswer = isEven(generatedNumber) ? 'yes' : 'no';
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
  console.log(`Let's try again, ${username}!`);
};

const loseCalcMessage = (userAnswer, correctAnswer, username) => {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${username}!`);
};

const generateRandomInt = () => parseInt(Math.random() * 50, 10);

const showQuestion = (question) => {
  console.log(`Question: ${question}`);
};

const isCorrectEvenAnswer = (answer, number) => {
  if ((answer === 'yes' && isEven(number)) || (answer === 'no' && !isEven(number))) {
    return true;
  }
  return false;
};


const isCorrectCalcAnswer = (answer, correctAnswer) => {
  if (answer === correctAnswer) {
    return true;
  }
  return false;
};

const generateRandomOper = () => {
  switch (parseInt(Math.random() * 3, 10)) {
    case (0):
      return '+';
    case (1):
      return '-';
    default:
      return '*';
  }
};

const calculateExpression = (expr) => {
  const [a, operator, b] = expr.split(' ');
  switch (operator) {
    case ('+'):
      return +a + +b;
    case ('-'):
      return a - b;
    default:
      return a * b;
  }
};

export const startBrainEven = () => {
  const winAnswersNumber = 3;
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if the number is even, otherwise answer "no".\n');

  const username = getUsername();
  console.log(`Hello, ${username}!\n`);

  let rightAnswerCounter = 0;

  while (rightAnswerCounter < winAnswersNumber) {
    const randomNumber = generateRandomInt();
    showQuestion(randomNumber);
    const answer = getAnswer();
    if (isCorrectEvenAnswer(answer, randomNumber)) {
      console.log('Correct!');
      rightAnswerCounter += 1;
    } else {
      loseEvenMessage(answer, randomNumber, username);
      break;
    }
  }

  if (rightAnswerCounter === winAnswersNumber) {
    winMessage(username);
  }
};

export const startBrainCalc = () => {
  const winAnswersNumber = 3;
  console.log('Welcome to the Brain Games!');
  console.log('What is the result of the expression ?\n');

  const username = getUsername();
  console.log(`Hello, ${username}!\n`);

  let rightAnswerCounter = 0;

  while (rightAnswerCounter < winAnswersNumber) {
    const randomExpr = `${generateRandomInt()} ${generateRandomOper()} ${generateRandomInt()}`;
    const correctAnswer = calculateExpression(randomExpr);
    showQuestion(randomExpr);
    const answer = +getAnswer();
    if (isCorrectCalcAnswer(answer, correctAnswer)) {
      console.log('Correct!');
      rightAnswerCounter += 1;
    } else {
      loseCalcMessage(answer, correctAnswer, username);
      break;
    }
  }

  if (rightAnswerCounter === winAnswersNumber) {
    winMessage(username);
  }
};
