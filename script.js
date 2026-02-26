const playerAlias = "<Haliwa>";
const sessionSeed = "<seed libre>";

const questions = [
{
    question: "Qui est l'auteur de One Piece ?",
    choices: ["Eiichiro Oda", "Masashi Kishimoto", "Akira Toriyama"],
    answer: "Eiichiro Oda"
},

{
    question: "Quel manga parle de ninjas ?",
    choices: ["One Piece", "Naruto", "Bleach"],
    answer: "Naruto"
},

{
    question: "Quel manga parle de pirates ?",
    choices: ["Dragon Ball", "One Piece", "Attack on Titan"],
    answer: "One Piece" 
},

{
    question: "Dans Dragon Ball, quel est le nom du Saiyan qui arrive sur Terre enfant ?",
    choices: ["Vegeta", "Goku", "Gohan"],
    answer: "Goku"
  },
  {
    question: "Quel est le nom du héros de Naruto ?",
    choices: ["Sasuke", "Naruto", "Kakashi"],
    answer: "Naruto"
  },
  {
    question: "Dans quel manga trouve-t-on des titans mangeurs d'humains ?",
    choices: ["Attack on Titan", "Tokyo Ghoul", "Demon Slayer"],
    answer: "Attack on Titan"
  },
  {
    question: "Quel est le nom de l'épée de Roronoa Zoro dans One Piece ?",
    choices: ["Enma", "Wado Ichimonji", "Shusui"],
    answer: "Wado Ichimonji"
  },
  {
    question: "Dans Demon Slayer, quel est le nom de la sœur de Tanjiro ?",
    choices: ["Nezuko", "Shinobu", "Mitsuri"],
    answer: "Nezuko"
  },
  {
    question: "Quel manga met en scène un lycéen qui combat des Hollows ?",
    choices: ["Bleach", "Jujutsu Kaisen", "Death Note"],
    answer: "Bleach"
  },
  {
    question: "Dans Death Note, comment Light Yagami écrit-il les noms de ses victimes ?",
    choices: ["Dans un carnet", "Sur un ordinateur", "Par téléphone"],
    answer: "Dans un carnet"
  }


];

let currentIndex = 0;
let score = 0;
let hasAnswered = false;

function resetGame() {
  currentIndex = 0;
  score = 0;
  hasAnswered = false;
}

const questionText = document.getElementById("questionText");
const scoreText = document.getElementById("scoreText");
const feedbackText = document.getElementById("feedbackText"); // AJOUT: récupération de l'élément feedback
const answerButtons = document.querySelectorAll(".answer-btn");
const nextBtn = document.getElementById("nextBtn"); // AJOUT: récupération du bouton suivant
const startBtn = document.getElementById("startBtn"); // AJOUT: récupération du bouton commencer

function renderQuestion() {
  const currentQuestion = questions[currentIndex];
  questionText.textContent = currentQuestion.question;

  for (let index = 0; index < answerButtons.length; index = index + 1) {
    const button = answerButtons[index];
    button.textContent = currentQuestion.choices[index];
    button.disabled = false;
    button.classList.remove("good", "bad");
    button.style.display = "inline-block"; // AJOUT: réafficher les boutons
  }

  scoreText.textContent = "Score: " + score;
  nextBtn.style.display = "inline-block"; // AJOUT: réafficher le bouton suivant
  startBtn.style.display = "none"; // AJOUT: cacher le bouton commencer
}


function checkAnswer(selectedValue, button) {
  if (hasAnswered) {
    return;
  }

  const correctAnswer = questions[currentIndex].answer; // CORRECTION: .index -> .answer
  hasAnswered = true;

  if (selectedValue === correctAnswer) {
    score = score + 1;
    button.classList.add("good");
    feedbackText.textContent = "Bonne réponse";
  } else {
    button.classList.add("bad");
    feedbackText.textContent = "Mauvaise réponse. Bonne réponse: " + correctAnswer;
  }

  scoreText.textContent = "Score: " + score;

  for (let i = 0; i < answerButtons.length; i = i + 1) {
    const btn = answerButtons[i];
    btn.disabled = true; // CORRECTION: ajout de la désactivation des boutons
  }
}

function goToNextQuestion() {
  currentIndex = currentIndex + 1;

  if (currentIndex < questions.length) {
    hasAnswered = false; // CORRECTION: "false" (string) -> false (booléen)
    feedbackText.textContent = "";
    renderQuestion();
    return;
  }

  showEndScreen();
}

function showEndScreen() {
  questionText.textContent = "Quiz terminé";
  feedbackText.textContent = "Score final: " + score + " / " + questions.length;

  for (let i = 0; i < answerButtons.length; i = i + 1) {
    const button = answerButtons[i];
    button.style.display = "none";
  }

  nextBtn.style.display = "none";
  startBtn.textContent = "Rejouer";
  startBtn.style.display = "inline-block";
}

// AJOUT: Gestionnaires d'événements donné par l'ia 
answerButtons.forEach(button => {
  button.addEventListener("click", () => {
    checkAnswer(button.textContent, button);
  });
});

nextBtn.addEventListener("click", goToNextQuestion);

startBtn.addEventListener("click", () => {
  resetGame();
  renderQuestion();
});

