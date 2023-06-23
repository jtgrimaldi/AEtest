let quiz = [
  {
    question: "Which of the following correctly uses the adjective ending for a masculine noun in the nominative case?",
    options: [
      "Der alte Mann geht zum Markt.",
      "Der alten Mann geht zum Markt.",
      "Der altem Mann geht zum Markt."
    ],
    answer: 0
  },
  {
    question: "Which of the following correctly uses the adjective ending for a feminine noun in the accusative case?",
    options: [
      "Ich sehe die alte Frau.",
      "Ich sehe die alten Frau.",
      "Ich sehe die altem Frau."
    ],
    answer: 0
  },
  // Add more questions as needed
];

let currentQuestion = 0;

function showQuestion() {
  let question = quiz[currentQuestion];
  let questionDiv = document.getElementById('quiz');
  questionDiv.innerHTML = '<p>' + question.question + '</p>';

  for(let i=0; i<question.options.length; i++) {
    questionDiv.innerHTML += '<button onclick="submitAnswer(' + i + ')">' + question.options[i] + '</button>';
  }
}

function submitAnswer(option) {
  let question = quiz[currentQuestion];
  let resultsDiv = document.getElementById('results');
  
  if(option === question.answer) {
    resultsDiv.innerHTML = "Correct!";
  } else {
    resultsDiv.innerHTML = "Sorry, that's incorrect.";
  }
  
  currentQuestion++;
  
  if(currentQuestion < quiz.length) {
    showQuestion();
  } else {
    // Quiz is over
    resultsDiv.innerHTML += "<p>Quiz complete!</p>";
  }
}

showQuestion();
