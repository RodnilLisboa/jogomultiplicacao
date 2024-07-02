let score = 0;
let num1, num2;

function generateQuestion() {
    num1 = Math.floor(Math.random() * 10) + 1;
    num2 = Math.floor(Math.random() * 10) + 1;
    document.getElementById('question').innerText = `Quanto é ${num1} x ${num2}?`;
}

function checkAnswer() {
    const answer = parseInt(document.getElementById('answer').value);
    if (answer === num1 * num2) {
        score++;
        document.getElementById('result').innerText = 'Correto!';
    } else {
        document.getElementById('result').innerText = 'Errado. Tente novamente.';
    }
    document.getElementById('score').innerText = score;
    document.getElementById('answer').value = '';
    generateQuestion();
}

window.onload = function() {
    generateQuestion();
    
    // Adiciona evento para detectar a tecla "Enter"
    document.getElementById('answer').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            checkAnswer();
        }
    });
}
