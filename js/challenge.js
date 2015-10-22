// $(document).ready(function() {
var counter = 0;
var maxGuesses = 5;
// var answer = 0;

function initialise()
	{
	answer = Math.floor((Math.random() * 100)+1);
	document.game.result.value = "";
	document.game.guess.value = "";
	}

function calculate () {
  validate(answer);
  checkGuess(answer);
  counter++;
  countGuess(counter);
}

function validate()  {
    if (document.game.guess.value > 101 || document.game.guess.value <= 0)
      alert("Invalid Number");
  }

function countGuess() {
    if(counter == maxGuesses)
        alert("You are a looooser!");
      }

function checkGuess()	{
	if (document.game.guess.value == answer)
		document.game.result.value = "You got it!";
	else if (document.game.guess.value < answer)
		document.game.result.value = "Too Low";
	else
		document.game.result.value = "Too High";
  }

//Timer
    function startTimer(duration, display) {
      var timer = duration, seconds;
      setInterval(function () {
          seconds = parseInt(timer % 60, 10);

          seconds = seconds < 10 ? "0" + seconds : seconds;

          display.textContent = ":" + seconds;

          if (--timer < 0) {
              timer = duration;
          }

      }, 1000);
  }

  window.onload = function () {
      var fiveMinutes = 60 * .25,
          display = document.querySelector('#time');
      startTimer(fiveMinutes, display);
  }


//End timer

// });


// var rannum= Math.floor((Math.random() * 100) + 1);
// var counter = 0;
// var guess = 0;
// var maxGuesses = 7;
//
// onclick = function (){
//   var guess = document.getElementById('guess').value;
//   checkGuess(guess);
//   counter ++;
//
// }
