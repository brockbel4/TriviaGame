// This is the logic for the Trivia game
// Declaring global variables
// Constant variables
var TOTAL_QUESTIONS = 5;
var TIME_LEFT = 60;
// Variables that will change
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var begin = false;
var timeLeft = TIME_LEFT;
var timer;

// Functions

// To do: Create a timer

// This function will hide the start screen and show the trivia game and start the timer.
// To do: add timer start
function startGame() {
  correct = 0;
  incorrect = 0;
  unanswered = 0;
  begin = false;
  timeLeft = TIME_LEFT;
  timer = setInterval(tick, 1000);
  $('input[type="radio"]').prop('checked', false);
  $("#timer").text(timeLeft);
  $("#startScreen").css("display", "none");
  $(".resultScreen").css("display", "none");
  $(".quizElement").css("display", "inline-block");
}

function tick() {
  timeLeft--;
  if (timeLeft === 0) {
    results();
  } else {
    $("#timer").text(timeLeft);
  }
}

function results() {
  $(".quizElement").css("display", "none");
  $(".resultScreen").css("display", "inline-block");
  $(".quizQuestion").each(function() {
    var questionCorrect = false;
    var questionUnanswered = true;
    $(this)
      .children("input[type=radio]")
      .each(function() {
        if (this.checked) {
          if (this.value === "right") {
            questionCorrect = true;
          }
          questionUnanswered = false;
        }
      });
    if (questionUnanswered) {
      unanswered++;
    } else if (questionCorrect) {
      correct++;
    } else {
      incorrect++;
    }
  });
  $("#correct").text("Correct: " + correct);
  $("#incorrect").text("Incorrect: " + incorrect);
  $("#unanswered").text("Unanswered: " + unanswered);
  clearInterval(timer);
}

// Logic of the game
// This block of code is what detects the click and runs the renderGame function to start the game.
$("#begin").on("click", function(e) {
  startGame();
});

// To do: Make an if statement to detect Correct/Incorrect/Unanswered results when the "Submit" button is clicked.

// To do: Display the results on a different screen after submitting the quiz.
$("#submitButton").on("click", function(showResults) {
  results();
});
// "Start Over" button restarts the game.
$("#restart").on("click", function(restartGame) {
  startGame();
});