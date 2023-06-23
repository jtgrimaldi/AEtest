function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // swap elements
  }
}

let quiz = [
  {
    question: "Ich sehe die alt____ Frau. Wähle die richtige Antwort.",
    options: ["e", "er", "em", "en"],
    answer: "e"
  },
  {
    question: "Der alt____ Mann geht zum Markt. Wähle die richtige Antwort.",
    options: ["e", "er", "em", "en"],
    answer: "e"
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
  
  shuffleArray(q.options); // Shuffle the options before displaying them
  
  for (let i = 0; i < q.options.length; i++) {
    let option = document.createElement('button');
    option.innerText = q.options[i];
    option.addEventListener('click', function() { checkAnswer(q.options[i]); });
    quizDiv.appendChild(option);
  }

  // Add retry button
  let retryButton = document.createElement('button');
  retryButton.innerText = 'Noch einmal versuchen!';
  retryButton.addEventListener('click', function() { showQuestion(); });
  quizDiv.appendChild(retryButton);
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
