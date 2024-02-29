function generateQuestion() {
    const num1 = Math.floor(Math.random() * 1000);
    const num2 = Math.floor(Math.random() * 1000);
    const operators = ["+", "-", "*", "/", "%"];
    const randomOperator = operators[Math.floor(Math.random() * operators.length)];
    let answer;

    switch(randomOperator) {
        case "+":
            answer = num1 + num2;
            break;
        case "-":
            answer = num1 - num2;
            break;
        case "*":
            answer = num1 * num2;
            break;
        case "/":
            answer = num1 / num2;
            break;
        case "%":
            answer = num1 % num2;
            break;
        default:
            break;
    }

    return { question: `What is ${num1} ${randomOperator} ${num2}?`, answer: answer };
}

let currentQuestion = generateQuestion();
let score = 0;

function displayQuestion() {
    document.getElementById('question').innerText = currentQuestion.question;
}

function checkAnswer() {
    const userAnswer = parseInt(document.getElementById('answer').value.trim(), 10);
    const correctAnswer = currentQuestion.answer;

    if (userAnswer === correctAnswer) {
        alert('You are correct!');
        score++; 
    } else {
        alert(`You are wrong! The correct answer is ${correctAnswer}.`);
    }
}

function generateNewQuestion() {
    currentQuestion = generateQuestion();
    displayQuestion();
    document.getElementById('answer').value = ""; 
}

displayQuestion();
