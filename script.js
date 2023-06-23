let quiz = [
  {
    question: "Ich sehe die alt____ Frau. Wähle die richtige Antwort.",
    options: ["e", "er", "em", "en"],
    answer: 0 // "e" is the correct adjective ending for a feminine noun in the accusative case.
  },
  {
    question: "Der alt____ Mann geht zum Markt. Wähle die richtige Antwort.",
    options: ["e", "er", "em", "en"],
    answer: 3 // "en" is the correct adjective ending for a masculine noun in the nominative case.
  },
  // Add more questions as needed
];

let currentQuestion = 0;

function showQuestion() {
  let q = quiz[currentQuestion];
  let quizDiv = document.getElementById('quiz');
  quizDiv.innerHTML = '';
  let question = document.createElement('p');
  question.innerText = q.question;
  quizDiv.appendChild(question);
  for (let i = 0; i < q.options.length; i++) {
    let option = document.createElement('button');
    option.innerText = q.options[i];
    option.addEventListener('click', function() { checkAnswer(i); });
    quizDiv.appendChild(option);
  }
}

function checkAnswer(userAnswer) {
  let q = quiz[currentQuestion];
  let resultsDiv = document.getElementById('results');
  if (userAnswer === q.answer) {
    resultsDiv.innerText = 'Richtig!';
  } else {
    resultsDiv.innerText = 'Leider falsch. Versuche es noch einmal.';
  }
  currentQuestion++;
  if (currentQuestion < quiz.length) {
    showQuestion();
  } else {
    resultsDiv.innerText += '\n Du hast das Quiz abgeschlossen!';
  }
}

// Start the quiz by showing the first question
showQuestion();
