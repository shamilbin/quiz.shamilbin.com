
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-btn");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionsSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress");


const quizQuestions = [

  {
    question: "Which planet is known as the 'Morning Star'?",
    answers: [
      { text: "Mars", correct: false },
      { text: "Venus", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Mercury", correct: false }
    ]
  },
  {
    question: "What is the largest species of shark?",
    answers: [
      { text: "Great White Shark", correct: false },
      { text: "Whale Shark", correct: true },
      { text: "Tiger Shark", correct: false },
      { text: "Hammerhead Shark", correct: false }
    ]
  },
  {
    question: "Which country is home to the kangaroo?",
    answers: [
      { text: "New Zealand", correct: false },
      { text: "Australia", correct: true },
      { text: "South Africa", correct: false },
      { text: "Argentina", correct: false }
    ]
  },
  {
    question: "What is the capital of Canada?",
    answers: [
      { text: "Toronto", correct: false },
      { text: "Vancouver", correct: false },
      { text: "Ottawa", correct: true },
      { text: "Montreal", correct: false }
    ]
  },
  {
    question: "Which element has the chemical symbol 'K'?",
    answers: [
      { text: "Potassium", correct: true },
      { text: "Krypton", correct: false },
      { text: "Kryptonite", correct: false },
      { text: "Calcium", correct: false }
    ]
  },
  {
    question: "How many bones are in the adult human body?",
    answers: [
      { text: "206", correct: true },
      { text: "200", correct: false },
      { text: "212", correct: false },
      { text: "198", correct: false }
    ]
  },
  {
    question: "Which famous scientist developed the theory of relativity?",
    answers: [
      { text: "Isaac Newton", correct: false },
      { text: "Albert Einstein", correct: true },
      { text: "Galileo Galilei", correct: false },
      { text: "Stephen Hawking", correct: false }
    ]
  },
  {
    question: "What is the largest desert in the world?",
    answers: [
      { text: "Sahara Desert", correct: false },
      { text: "Gobi Desert", correct: false },
      { text: "Antarctica", correct: true },
      { text: "Arabian Desert", correct: false }
    ]
  },
  {
    question: "Which country invented tea?",
    answers: [
      { text: "India", correct: false },
      { text: "Japan", correct: false },
      { text: "China", correct: true },
      { text: "England", correct: false }
    ]
  },
  {
    question: "What is the tallest mountain in Africa?",
    answers: [
      { text: "Mount Kenya", correct: false },
      { text: "Mount Kilimanjaro", correct: true },
      { text: "Mount Stanley", correct: false },
      { text: "Mount Meru", correct: false }
    ]
  },
  {
    question: "Which blood type is the universal donor?",
    answers: [
      { text: "A", correct: false },
      { text: "B", correct: false },
      { text: "AB", correct: false },
      { text: "O", correct: true }
    ]
  },
  {
    question: "What is the largest ocean on Earth?",
    answers: [
      { text: "Atlantic Ocean", correct: false },
      { text: "Indian Ocean", correct: false },
      { text: "Pacific Ocean", correct: true },
      { text: "Arctic Ocean", correct: false }
    ]
  },
  {
    question: "Which country has the most time zones?",
    answers: [
      { text: "Russia", correct: false },
      { text: "USA", correct: false },
      { text: "France", correct: true },
      { text: "China", correct: false }
    ]
  },
  {
    question: "What is the capital of Iceland?",
    answers: [
      { text: "Oslo", correct: false },
      { text: "Stockholm", correct: false },
      { text: "Reykjavik", correct: true },
      { text: "Helsinki", correct: false }
    ]
  },
  {
    question: "Which planet has the most moons?",
    answers: [
      { text: "Jupiter", correct: false },
      { text: "Saturn", correct: true },
      { text: "Neptune", correct: false },
      { text: "Uranus", correct: false }
    ]
  },
  {
    question: "What is the largest land animal?",
    answers: [
      { text: "Polar Bear", correct: false },
      { text: "Elephant", correct: true },
      { text: "Giraffe", correct: false },
      { text: "Hippopotamus", correct: false }
    ]
  },
  {
    question: "Which country is the largest by area?",
    answers: [
      { text: "China", correct: false },
      { text: "USA", correct: false },
      { text: "Canada", correct: false },
      { text: "Russia", correct: true }
    ]
  },
  {
    question: "What is the capital of Egypt?",
    answers: [
      { text: "Alexandria", correct: false },
      { text: "Cairo", correct: true },
      { text: "Luxor", correct: false },
      { text: "Giza", correct: false }
    ]
  },
  {
    question: "Which planet is closest to the Sun?",
    answers: [
      { text: "Venus", correct: false },
      { text: "Earth", correct: false },
      { text: "Mercury", correct: true },
      { text: "Mars", correct: false }
    ]
  },
  {
    question: "What is the longest river in the world?",
    answers: [
      { text: "Amazon River", correct: false },
      { text: "Nile River", correct: true },
      { text: "Yangtze River", correct: false },
      { text: "Mississippi River", correct: false }
    ]
  },
  {
    question: "Which country is shaped like a boot?",
    answers: [
      { text: "Greece", correct: false },
      { text: "Italy", correct: true },
      { text: "Spain", correct: false },
      { text: "Portugal", correct: false }
    ]
  },
  {
    question: "What is the capital of Brazil?",
    answers: [
      { text: "Rio de Janeiro", correct: false },
      { text: "São Paulo", correct: false },
      { text: "Brasília", correct: true },
      { text: "Salvador", correct: false }
    ]
  },
  {
    question: "Which animal can live the longest without water?",
    answers: [
      { text: "Camel", correct: false },
      { text: "Kangaroo Rat", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false }
    ]
  },
  {
    question: "What is the largest bird in the world?",
    answers: [
      { text: "Emu", correct: false },
      { text: "Albatross", correct: false },
      { text: "Ostrich", correct: true },
      { text: "Condor", correct: false }
    ]
  },
  {
    question: "Which country has the most islands?",
    answers: [
      { text: "Philippines", correct: false },
      { text: "Indonesia", correct: false },
      { text: "Sweden", correct: true },
      { text: "Canada", correct: false }
    ]
  },
  {
    question: "What is the smallest country in the world?",
    answers: [
      { text: "Monaco", correct: false },
      { text: "Vatican City", correct: true },
      { text: "San Marino", correct: false },
      { text: "Liechtenstein", correct: false }
    ]
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Venus", correct: false },
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Saturn", correct: false }
    ]
  },
  {
    question: "What is the capital of South Korea?",
    answers: [
      { text: "Busan", correct: false },
      { text: "Incheon", correct: false },
      { text: "Seoul", correct: true },
      { text: "Daegu", correct: false }
    ]
  },
  {
    question: "Which language has the most words?",
    answers: [
      { text: "English", correct: true },
      { text: "Mandarin", correct: false },
      { text: "Spanish", correct: false },
      { text: "Arabic", correct: false }
    ]
  },
  {
    question: "What is the fastest land animal?",
    answers: [
      { text: "Lion", correct: false },
      { text: "Cheetah", correct: true },
      { text: "Gazelle", correct: false },
      { text: "Pronghorn Antelope", correct: false }
    ]
  },
  {
    question: "Which country has the most pyramids?",
    answers: [
      { text: "Egypt", correct: false },
      { text: "Mexico", correct: false },
      { text: "Sudan", correct: true },
      { text: "Peru", correct: false }
    ]
  }
];
// Quiz variables
let currentQuestionIndex = 0;
let score = 0;
let answerDisabled = false;
let currentQuestions = []; // This will store our 5 random questions

// Initialize with total possible questions (for display purposes)
totalQuestionsSpan.textContent = 5;
maxScoreSpan.textContent = 5;

// Event listeners
startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz);

function startQuiz() {
  console.log("Quiz Started");
  
  // Reset quiz state
  currentQuestionIndex = 0;
  score = 0;
  scoreSpan.textContent = score;
  
  // Select 5 random questions
  currentQuestions = [...quizQuestions]
    .sort(() => Math.random() - 0.5)
    .slice(0, 5);
  
  // Update UI
  startScreen.classList.remove("active");
  quizScreen.classList.add("active");
  
  showQuestion();
}

function showQuestion() {
  answerDisabled = false;
  const currentQuestion = currentQuestions[currentQuestionIndex];
  
  // Update progress indicators
  currentQuestionSpan.textContent = currentQuestionIndex + 1;
  const progressPercent = (currentQuestionIndex / 5) * 100;
  progressBar.style.width = progressPercent + "%";
  
  // Display question
  questionText.textContent = currentQuestion.question;
  answersContainer.innerHTML = "";
  
  // Create answer buttons
  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("answer-btn");
    button.dataset.correct = answer.correct;
    button.addEventListener("click", selectAnswer);
    answersContainer.appendChild(button);
  });
}

function selectAnswer(event) {
  if (answerDisabled) return;
  answerDisabled = true;
  
  const selectedButton = event.target;
  const isCorrect = selectedButton.dataset.correct === "true";
  

  Array.from(answersContainer.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    } else if (button === selectedButton) {
      button.classList.add("incorrect");
    }
  });
  

  if (isCorrect) {
    score++;
    scoreSpan.textContent = score;
  }
  
  // Move to next question or show results
  setTimeout(() => {
    currentQuestionIndex++;
    if (currentQuestionIndex < 5) {
      showQuestion();
    } else {
      showResult();
    }
  }, 900);
}

function showResult() {
  quizScreen.classList.remove("active");
  resultScreen.classList.add("active");
  
  finalScoreSpan.textContent = score;
  const percentage = (score / 5) * 100;
  
  // Set result message based on percentage
  if (percentage === 100) {
    resultMessage.textContent = "Perfect! You're a genius!";
  } else if (percentage >= 80) {
    resultMessage.textContent = "Great job! You know your stuff!";
  } else if (percentage >= 60) {
    resultMessage.textContent = "Good effort! Keep learning!";
  } else if (percentage >= 40) {
    resultMessage.textContent = "Not bad! Try again to improve!";
  } else {
    resultMessage.textContent = "Keep studying! You'll get better!";
  }
}

function restartQuiz() {
  console.log("Quiz Re-Started");
  resultScreen.classList.remove("active");
  startQuiz();
}