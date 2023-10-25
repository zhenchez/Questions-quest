let round = 0;
const questionsJson = {
  questions: [
    {
      question: "How many countrys does the US have?",
      answers: [
        {
          answer: "50",
          correct: false,
        },
        {
          answer: "57",
          correct: true,
        },
        {
          answer: "46",
          correct: false,
        },
        {
          answer: "40",
          correct: false,
        },
      ],
    },
    {
      question: "What is the largest planet in our solar system?",
      answers: [
        {
          answer: "Earth",
          correct: false,
        },
        {
          answer: "Jupiter",
          correct: true,
        },
        {
          answer: "Mars",
          correct: false,
        },
        {
          answer: "Venus",
          correct: false,
        },
      ],
    },
    {
      question: "Who wrote Don Quixote?",
      answers: [
        {
          answer: "Miguel de Unamuno",
          correct: false,
        },
        {
          answer: "Miguel de Cervantes",
          correct: true,
        },
        {
          answer: "Lope de Vega",
          correct: false,
        },
        {
          answer: "Antonio Machado",
          correct: false,
        },
      ],
    },
    {
      question: "What is the chemical symbol for gold?",
      answers: [
        {
          answer: "Ag",
          correct: false,
        },
        {
          answer: "Au",
          correct: true,
        },
        {
          answer: "Gl",
          correct: false,
        },
        {
          answer: "Fe",
          correct: false,
        },
      ],
    },
    {
      question: "In what year did human step on the moon for the first time?",
      answers: [
        {
          answer: "1980",
          correct: false,
        },
        {
          answer: "1969",
          correct: true,
        },
        {
          answer: "1959",
          correct: false,
        },
        {
          answer: "1978",
          correct: false,
        },
      ],
    },
    {
      question: "What is the unit of currency in South Africa?",
      answers: [
        {
          answer: "Dinar",
          correct: false,
        },
        {
          answer: "Rand",
          correct: true,
        },
        {
          answer: "Dirham",
          correct: false,
        },
        {
          answer: "Naira",
          correct: false,
        },
      ],
    },
    {
      question: "How many KM of coast do Spain have?",
      answers: [
        {
          answer: "7888 KM",
          correct: false,
        },
        {
          answer: "7879 KM",
          correct: true,
        },
        {
          answer: "7900 KM",
          correct: false,
        },
        {
          answer: "7800KM",
          correct: false,
        },
      ],
    },
    {
      question: "Which cartoon character is yellow and can shape his body?",
      answers: [
        {
          answer: "SpongeBob",
          correct: false,
        },
        {
          answer: "Jake the dog",
          correct: true,
        },
        {
          answer: "Winnie the Pooh",
          correct: false,
        },
        {
          answer: "Pikachu",
          correct: false,
        },
      ],
    },
    {
      question: "What is the official language of the United States?",
      answers: [
        {
          answer: "English",
          correct: false,
        },
        {
          answer: "None",
          correct: true,
        },
        {
          answer: "French",
          correct: false,
        },
        {
          answer: "Spanish",
          correct: false,
        },
      ],
    },
    {
      question:
        "What is the first thing you have to say entering a doner kebab?",
      answers: [
        {
          answer: "Hola, buenas",
          correct: false,
        },
        {
          answer: "Amiguo",
          correct: true,
        },
        {
          answer: "Salsa blanca",
          correct: false,
        },
        {
          answer: "Hello",
          correct: false,
        },
      ],
    },
    {
      question: "Which American president appears on a one-dollar bill?",
      answers: [
        {
          answer: "John Adams",
          correct: false,
        },
        {
          answer: "George Washington",
          correct: true,
        },
        {
          answer: "Joe Biden",
          correct: false,
        },
        {
          answer: "Clinton William",
          correct: false,
        },
      ],
    },
    {
      question: "Which is the tallest mountain in Africa?",
      answers: [
        {
          answer: "Mount Kenya",
          correct: false,
        },
        {
          answer: "Kilimanjaro",
          correct: true,
        },
        {
          answer: "Mount Meru",
          correct: false,
        },
        {
          answer: "Rwenzori",
          correct: false,
        },
      ],
    },
    {
      question: "Capital of Albania?",
      answers: [
        {
          answer: "Durrës",
          correct: false,
        },
        {
          answer: "Tirana",
          correct: true,
        },
        {
          answer: "Vlorë",
          correct: false,
        },
        {
          answer: "Milot",
          correct: false,
        },
      ],
    },
    {
      question: "How many color are there in a rainbow?",
      answers: [
        {
          answer: "6",
          correct: false,
        },
        {
          answer: "7",
          correct: true,
        },
        {
          answer: "9",
          correct: false,
        },
        {
          answer: "5",
          correct: false,
        },
      ],
    },
    {
      question: "Wich restaurant's mascot is a clown?",
      answers: [
        {
          answer: "KFC",
          correct: false,
        },
        {
          answer: "McDonald's",
          correct: true,
        },
        {
          answer: "Burguer King",
          correct: false,
        },
        {
          answer: "Five Guys",
          correct: false,
        },
      ],
    },
    {
      question: "What is the unit of currency in China?",
      answers: [
        {
          answer: "Yen",
          correct: false,
        },
        {
          answer: "Yuan",
          correct: true,
        },
        {
          answer: "Won",
          correct: false,
        },
        {
          answer: "Cn",
          correct: false,
        },
      ],
    },
    {
      question: "How many seconds are in 1 week?",
      answers: [
        {
          answer: "600800",
          correct: false,
        },
        {
          answer: "604800",
          correct: true,
        },
        {
          answer: "580800",
          correct: false,
        },
        {
          answer: "624800",
          correct: false,
        },
      ],
    },
    {
      question: "What company created Counter Strike?",
      answers: [
        {
          answer: "Riot Games",
          correct: false,
        },
        {
          answer: "Valve",
          correct: true,
        },
        {
          answer: "Tencent",
          correct: false,
        },
        {
          answer: "EA",
          correct: false,
        },
      ],
    },
    {
      question: "What was the name of the Greek god of war?",
      answers: [
        {
          answer: "Apollo",
          correct: false,
        },
        {
          answer: "Ares",
          correct: true,
        },
        {
          answer: "Jupiter",
          correct: false,
        },
        {
          answer: "Hermes",
          correct: false,
        },
      ],
    },
    {
      question: "What yeas was the first model of the iPhone released?",
      answers: [
        {
          answer: "2003",
          correct: false,
        },
        {
          answer: "2007",
          correct: true,
        },
        {
          answer: "2005",
          correct: false,
        },
        {
          answer: "2000",
          correct: false,
        },
      ],
    },
  ],
};
const main = document.querySelector(".main");
const startGameBtn = document.querySelector(".start-btt");
const checkBtn = document.querySelector(".check-btt");
const result = document.querySelector(".result");
const resetBtn = document.querySelector(".reset-btt");

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function shuffleAnswers(array) {
  shuffle(array.answers);
}

function generateHTML(questions, i) {
  let quizHTML = "";
  questions.forEach(question => {
    shuffleAnswers(question);

    quizHTML += `<div class="question"><p class="title">${question.question}</p>`;
    question.answers.forEach((answer, ansIndex) => {
      quizHTML += `<ul class="answer">
                <input type="radio" name="q${i}" id="q${i}a${ansIndex}" value="${ansIndex}">
                <label for="q${i}a${ansIndex}">${answer.answer}</label></ul>
            `;
    });
    quizHTML += "</div>";
    i++;
  });
  return quizHTML;
}

function changeColor(checkedRadio) {
  checkedRadio.forEach(label => {
    let labelFor = label.getAttribute("id");
    document.getElementById(labelFor).checked = true;
    let labelElement = document.querySelector(`label[for="${labelFor}"]`);
    labelElement.style.color = "#00ff15";
  });
}

function disableRadio(allRadio) {
  allRadio.forEach(radio => {
    radio.disabled = true;
  });
}

function checkAnswer(questions) {
  const selectedAnswers = Array.from(
    document.querySelectorAll('input[type="radio"]:checked')
  );
  const areAllCorrect = questions.every((question, index) => {
    return (
      parseInt(selectedAnswers[index].value) ===
      question.answers.findIndex(answer => answer.correct)
    );
  });

  !areAllCorrect ? location.reload() : console.log(areAllCorrect);
  return areAllCorrect;
}

function startGame() {
  startGameBtn.style.display = "none";
  checkBtn.style.display = "block";
  shuffle(questionsJson.questions);
  const firstQuestions = questionsJson.questions.slice(0, 2);
  const secondQuestions = questionsJson.questions.slice(2, 4);
  let html = generateHTML(firstQuestions, 0);
  main.innerHTML = html;

  checkBtn.addEventListener("click", () => {
    const checkedRadio = document.querySelectorAll(
      'input[type="radio"]:checked'
    );
    const allRadio = document.querySelectorAll('input[type="radio"]');
    if (round === 1) {
      checkAnswer(secondQuestions);
      changeColor(checkedRadio);
      disableRadio(allRadio);
      checkBtn.style.display = "none";
      result.style.display = "block";
      result.innerHTML = `You got it right!`;
      resetBtn.style.display = "block";
      round = 0;
    } else {
      const correct = checkAnswer(firstQuestions);
      changeColor(checkedRadio);
      disableRadio(allRadio);
      if (correct) {
        html = generateHTML(secondQuestions, 2);
        main.innerHTML += html;
      }
      round++;
    }
  });
}

startGameBtn.addEventListener("click", startGame);
