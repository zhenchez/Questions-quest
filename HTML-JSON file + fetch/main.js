let round = 0;
let selectedQuestions = [];
let moreQuestionsToDisplay = [];
let allQuestions = [];
const main = document.querySelector(".main");
const result = document.querySelector(".result");
const mode = document.querySelector(".mode");
const btt = document.querySelector(".check-bt");
const resetBtt = document.querySelector(".reset");
const links = document.querySelector(".links");

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

function shuffleAnswers(questions) {
  shuffle(questions.answers);
}

function generateHTML(questions, questionNum, i) {
  let quizHTML = "";
  questions.forEach((question, index) => {
    shuffleAnswers(question);

    quizHTML += `<div class="question"><p>${index + questionNum}. ${
      question.question
    }</p>`;
    question.answers.forEach((answer, ansIndex) => {
      quizHTML += `<ul>
                <input type="radio" name="q${i}" id="q${i}a${ansIndex}" value="${ansIndex}">
                <label class="answer" for="q${i}a${ansIndex}">${answer.answer}</label></ul>
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

function disableRadio() {
  const allRadio = document.querySelectorAll('input[type="radio"]');
  allRadio.forEach(radio => {
    radio.disabled = true;
  });
}

function checkAnswer(questions, main, moreQuestionsToDisplay) {
  const selectedAnswers = Array.from(
    document.querySelectorAll('input[type="radio"]:checked')
  );

  const areAllCorrect = questions.every((question, index) => {
    return (
      parseInt(selectedAnswers[index].value) ===
      question.answers.findIndex(answer => answer.correct)
    );
  });

  console.log(areAllCorrect);
  console.log(round);

  if (areAllCorrect) {
    if (round === 1) {
      result.innerHTML = "Congrats, your answers are correct.";
      resetBtt.style.display = "block";
    } else {
      const questionHTML = generateHTML(moreQuestionsToDisplay, 3, 2);
      main.innerHTML += questionHTML;
    }
  } else {
    location.reload();
  }
}

/* function checkAnswer(allQuestions, main, moreQuestionsToDisplay) {
  const selectedAnswers = Array.from(
    document.querySelectorAll('input[type="radio"]:checked')
  );
  const areAllCorrect = selectedAnswers.every((selectedAnswer) => {
    const questionIndex = parseInt(selectedAnswer.name.slice(1));
    return allQuestions[questionIndex].answers[selectedAnswer.value].correct;
  });

  console.log(areAllCorrect);
  console.log(round);

  if (areAllCorrect) {
    if (round === 1) {
      result.innerHTML = "Congrats, your answers are correct.";
    } else {
      const questionHTML = generateHTML(moreQuestionsToDisplay, 3, 2);
      main.innerHTML += questionHTML;
    }
  } else {
  }
} */

function fetchJson(mode) {
  round = 0;
  selectedQuestions = [];
  moreQuestionsToDisplay = [];
  allQuestions = [];

  fetch("questions.json")
    .then(response => response.json())
    .then(data => {
      links.style.display = "none";
      shuffle(data[mode]);

      btt.style.display = "block";
      selectedQuestions = data[mode].slice(0, 2);
      moreQuestionsToDisplay = data[mode].slice(2, 4);
      allQuestions = data[mode].slice(0, 4);
      let quizHTML = generateHTML(selectedQuestions, 1, 0);

      main.innerHTML = quizHTML;

      btt.addEventListener("click", () => {
        const checkedRadio = document.querySelectorAll(
          'input[type="radio"]:checked'
        );
        if (round === 1) {
          disableRadio();
          checkAnswer(allQuestions, main, moreQuestionsToDisplay);
          changeColor(checkedRadio);
          btt.style.display = "none";
          round = 0;
        } else {
          disableRadio();
          checkAnswer(selectedQuestions, main, moreQuestionsToDisplay);
          changeColor(checkedRadio);
          round++;
        }
      });
    })
    .catch(error => console.error("Error fetching JSON data:", error));
}

document.getElementById("easy-mode").addEventListener("click", () => {
  result.innerHTML = "";
  mode.innerHTML = "Easy Mode";
  fetchJson("easyQuestions");
});
document.getElementById("medium-mode").addEventListener("click", () => {
  result.innerHTML = "";
  mode.innerHTML = "Medium Mode";
  fetchJson("mediumQuestions");
});
document.getElementById("hard-mode").addEventListener("click", () => {
  result.innerHTML = "";
  mode.innerHTML = "Hard Mode";
  fetchJson("hardQuestions");
});
