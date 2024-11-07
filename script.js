const questions = ["What planet is known as the 'Red Planet'?",
"Who painted the Mona Lisa?", "Who is my pretty little princess?"];
const choicesArray = [
    ["Earth", "Mars", "Jupiter", "Saturn"],
    ["Van Gogh", "Picasso", "Da Vinci", "Rembrandt"],
    ["Sarah 😍", "Luiz 🤔", "Guri 😢", "Gabs 🤮"]
];

const correctAnswers = ["Mars", "Da Vinci", "Sarah 😍"];

let currentQuestionIndex = 0;

let score = 0;

function displayQuestion() {
  if(currentQuestionIndex < questions.length){
    document.getElementById('question').innerHTML = questions[currentQuestionIndex];
  for (let i = 0; i < 4; i++) {
    const btn = document.getElementById(`choice${i+1}`);
    btn.style.display = "inline-block";
    btn.innerHTML = choicesArray[currentQuestionIndex][i];
    btn.value = choicesArray[currentQuestionIndex][i];
  }
  }else{
    document.getElementById("result").innerHTML = `You scored ${score} out of ${questions.length}!`;
    document.getElementById("question").innerHTML = "";
    for (let i = 0; i < 4; i++) {
      const btn = document.getElementById(`choice${i+1}`);
      btn.style.display = "none";
    }
    document.getElementById("retry").style.display = "block";
    
  }

}

function checkAnswer(button) {
  const feedback = document.getElementById("feedback");
  if(button.value === correctAnswers[currentQuestionIndex]){
    score++;
    feedback.style.color = "#32CD32";
    feedback.innerHTML = "Right!";
  }else{
    feedback.style.color = "#FF6347";
    feedback.innerHTML = "Wrong!";
  }
  currentQuestionIndex++;
  setTimeout(()=>{
    feedback.innerHTML = "";
    displayQuestion();
  }, 1000);
}

function tryAgain(){
  score = 0;
  currentQuestionIndex = 0;
  document.getElementById("retry").style.display = "none";
  document.getElementById("result").innerHTML = "";
  document.getElementById("feedback").innerHTML = "";
  for (let i = 0; i < 4; i++) {
    const btn = document.getElementById(`choice${i+1}`);
    btn.style.display = "inline-block";
  }
  displayQuestion();
}

displayQuestion();
