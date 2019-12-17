import readlineSync from 'readline-sync';

const askUsername = () => {
  const username = readlineSync.question('May I have your name? ');
  return username;
};

export default askUsername;
