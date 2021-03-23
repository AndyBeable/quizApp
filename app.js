// SELECT ELEMENTS
const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

// EVENT LISTENERS
startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  setNextQuestion();
});

// FUNCTIONALITY

let shuffledQuestions, currentQuestionIndex;

function startGame() {
  startButton.classList.add('hide');
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove('hide');
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add('hide');
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide');
  } else {
    startButton.innerText = 'Restart';
    startButton.classList.remove('hide');
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add('correct');
  } else {
    element.classList.add('wrong');
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
}

// QUESTONS

const questions = [
  {
    question: 'What was the last battle between Great Britain and France?',
    answers: [
      { text: 'The Battle of Trafalgar', correct: false },
      { text: 'The Battle of Waterloo', correct: true },
      { text: 'The Battle of Hastings', correct: false },
      { text: 'Battle of Agincourt', correct: false },
    ],
  },
  {
    question: 'Which flower is associated with Wales?',
    answers: [
      { text: 'Thistle', correct: false },
      { text: 'Rose', correct: false },
      { text: 'Shamrock', correct: false },
      { text: 'Daffodil', correct: true },
    ],
  },
  {
    question:
      'During the reign of Charles II parts of London were destroyed, what was the cause of this destruction?',
    answers: [
      { text: 'A war', correct: false },
      { text: 'A flood', correct: false },
      { text: 'A fire', correct: true },
      { text: 'An earthquake', correct: false },
    ],
  },
  {
    question: 'How often are general elections held in the UK?',
    answers: [
      { text: 'Every 3 years', correct: false },
      { text: 'Every 5 years', correct: true },
      { text: 'Every 4 years', correct: false },
      { text: 'Every 8 years', correct: false },
    ],
  },
  {
    question:
      'Scotland has its own banknotes, which are valid everywherein the UK',
    answers: [
      { text: 'True', correct: true },
      { text: 'False', correct: false },
    ],
  },
  {
    question:
      'What charity works to preserve important buildings, coastline and countryside in the UK?',
    answers: [
      { text: 'Shelter', correct: false },
      { text: 'Age UK', correct: false },
      { text: 'Crisis', correct: false },
      { text: 'The National Trust', correct: true },
    ],
  },
  {
    question: 'Who was the tribal leader who fought against the Romans?',
    answers: [
      { text: 'Cleopatra', correct: false },
      { text: 'Claudia', correct: false },
      { text: 'Boudicca', correct: true },
      { text: 'St Augustine', correct: false },
    ],
  },
  {
    question: 'Great Britain refers only to England, Wales and Scotland?',
    answers: [
      { text: 'True', correct: true },
      { text: 'False', correct: false },
    ],
  },
  {
    question: 'Who was voted the greatest Briton of all time in 2002?',
    answers: [
      { text: 'Issac Newton', correct: false },
      { text: 'Winston Churchill', correct: true },
      { text: 'David Beckham', correct: false },
      { text: 'Alexander Fleming', correct: false },
    ],
  },
  {
    question: 'Who is head of the Church of England?',
    answers: [
      { text: 'The Prime Minister', correct: false },
      { text: 'The Pope', correct: false },
      { text: 'The Monarch', correct: true },
      { text: 'The Archbishop of Canterbury', correct: false },
    ],
  },
];
