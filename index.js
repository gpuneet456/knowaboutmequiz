var readlineSync = require('readline-sync');
var userName = readlineSync.question('May I have your name? ');
console.log("Welcome " + userName + " to Do You Know Puneet\n");
var score = 0;

var highScores = [
  {
    name: "Puneet",
    score: "5"
  },
  {
    name: "Divya",
    score: "4"
  }
]
function validate_answer(question, answer) {
  if (question.answer.toLowerCase() === answer.toLowerCase()) {
    score++;
    console.log("Right!!");
  }
  else {
    console.log("Wrong!!");
  }
  console.log("Current Score is " + score);
  console.log("-----------------");
}
questionOne = {
  question: "Where do I live?",
  answer: "Udhampur"
}
questionTwo = {
  question: "Which is my favorite Anime?",
  answer: "Naruto"
}
questionThree = {
  question: "In Which company I am currently working?",
  answer: "McAfee"
}
questionFour = {
  question: "What is my favorite food?",
  answer: "Maggi"
}
questionFive = {
  question: "Who is my favorite superhero?",
  answer: "Batman"
}

var questions = [questionOne, questionTwo, questionThree, questionFour, questionFive];

for (var i = 0; i < questions.length; i++) {
  var ques = questions[i];
  var ans = readlineSync.question(ques.question + " ");
  validate_answer(ques, ans);
}
console.log("YAY!! Your Score is " + score);

console.log("Check out the high scores")
for (var j = 0; j < highScores.length; j++) {
  console.log(highScores[j].name + " " + highScores[j].score);
}


