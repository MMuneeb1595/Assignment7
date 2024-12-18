function getRandomOperator() {
    const operators = ['+', '-', '*', '/'];
    const randomIndex = Math.floor(Math.random() * operators.length);
    return operators[randomIndex];
  }
  
  // Function to get a random number between a min and max range
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const num1 = getRandomNumber(1, 10);
  const num2 = getRandomNumber(1, 10);
  const operator = getRandomOperator();
  const userAnswer = parseFloat(prompt(`What is ${num1} ${operator} ${num2}?`));
  let correctAnswer;
  if (operator === '+') {
    correctAnswer = num1 + num2;
  } else if (operator === '-') {
    correctAnswer = num1 - num2;
  } else if (operator === '*') {
    correctAnswer = num1 * num2;
  } else if (operator === '/') {
    correctAnswer = num1 / num2;
  }
  if (userAnswer === correctAnswer) {
    alert("Correct!");
  } else {
    alert("Try Again!");
  }