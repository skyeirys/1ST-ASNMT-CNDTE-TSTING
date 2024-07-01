const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let candidateName = "";
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";


//TODO: Variables for Part 2
let questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", 'What is the minimum crew size for the ISS? ']
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"]
let candidateAnswers = []


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("Please enter your name: ")
  console.log(candidateName);
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for (i = 0; i < questions.length; i++) {
    candidateAnswers.push(input.question(questions[i]));
  }
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

  for (let i = 0; i < questions.length; i++) {
    // console.log(`The correct answer is ${correctAnswers[i]}. ${candidateName}'s answer was ${candidateAnswers[i]}.`);
    console.log(`Your Answer: ${candidateAnswers[i]}`)
    if (candidateAnswers[i].toLowercase === correctAnswers[i].toLowerCase())
      console.log(`Correct Answer: ${correctAnswers}`)
    else {

      console.log(`Wrong! The correct answer is ${correctAnswers[i]}`)
    }
  }




  //TODO 3.2 use this variable to calculate the candidates score.

  let numOfCorrectAnswers = 0
  let numOfQuestions = 5;


  correctAnswers = correctAnswers.toString().toLowerCase().split(",")
  candidateAnswers = candidateAnswers.toString().toLowerCase().split(",")

  console.log(correctAnswers);
  console.log(candidateAnswers);

  for (let i = 0; i < correctAnswers.length; i++) {
    if (candidateAnswers[i] === correctAnswers[i])
      numOfCorrectAnswers += 1;
  }
  let grade = (numOfCorrectAnswers) / (numOfQuestions) * 100;

  if (grade >= 80) {
    console.log(`Your grade is ${grade}. You passed!`);
  } else {
    console.log(`Your grade is ${grade}. You failed! Try again!`);
  }

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
  console.log("Hello " + candidateName);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};
