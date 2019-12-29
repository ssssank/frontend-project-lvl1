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

const loseEvenMessage = (userAnswer, generatedNumber, username) => {
  const rightAnswer = isEven(generatedNumber) ? 'yes' : 'no';
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
  console.log(`Let's try again, ${username}!`);
};

const loseCalcMessage = (userAnswer, correctAnswer, username) => {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${calculateExpression(correctAnswer)}'.`);
  console.log(`Let's try again, ${username}!`);
};

const generateRandomInt = () => parseInt(Math.random() * 50, 10);

const showQuestion = (question) => {
  console.log(`Question: ${question}`);
};

const isCorrectEvenAnswer = (answer, question) => {
  if ((answer === 'yes' && isEven(question)) || (answer === 'no' && !isEven(question))) {
    return true;
  }
  return false;
};

const isCorrectCalcAnswer = (answer, question) => {
  const correctAnswer = calculateExpression(question);
  if (+answer === correctAnswer) {
    return true;
  }
  return false;
};

const generateRandomOper = () => {
  switch (Math.random() * 3) {
    case ('0'):
      return '+';
    case ('1'):
      return '-';
    default:
      return '*';
  }
};
const generateRandomExpr = () => `${generateRandomInt()} ${generateRandomOper()} ${generateRandomInt()}`;

const gamesMap = {
  'brain-even': {
    rule: 'Answer "yes" if the number is even, otherwise answer "no".\n',
    question: generateRandomInt,
    isCorrectAnswer: isCorrectEvenAnswer,
    loseMessage: loseEvenMessage,
  },
  'brain-calc': {
    rule: 'What is the result of the expression ?\n',
    question: generateRandomExpr,
    isCorrectAnswer: isCorrectCalcAnswer,
    loseMessage: loseCalcMessage,
  },
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
