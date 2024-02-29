window.onload = function() {
    var studentName = prompt("Please enter your name : ");
    
    function generateQuestion() {
        var num1 = Math.floor(Math.random() * 1000);
        var num2 = Math.floor(Math.random() * 1000);
        var operators = ["+", "-", "*"];
        var randOp = operators[Math.floor(Math.random() * operators.length)];
        let answer;

        switch(randOp) {
            case "+":
                answer = num1 + num2;
                break;
            case "-":
                answer = num1 - num2;
                break;
            case "*":
                answer = num1 * num2;
                break;
        }

        return { question: `What is ${num1} ${randOp} ${num2}?`, answer: answer };
    }
    
    function displayQuestions() {
        let score = 0;

        for (let i = 0; i < 10; i++) {
            var currentQuestion = generateQuestion();
            var userAnswer = parseInt(prompt(`${studentName}, ${currentQuestion.question}`), 10);
            
            if (!isNaN(userAnswer) && userAnswer === currentQuestion.answer) {
                score++;
            }
        }
        
        alert(`${studentName}, your total score is: ${score}`);
    }

    displayQuestions();
}
