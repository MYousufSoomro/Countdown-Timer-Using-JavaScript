//GETTING ELEMENTS HERE
var hoursInput = document.getElementById("typeHours");
var minutesInput = document.getElementById("typeMinutes");
var secondsInput = document.getElementById("typeSeconds");
var selectPara = document.getElementById("selectPara");
var inputDiv = document.getElementById("inputDiv");
var timerDiv = document.getElementById("timerDiv");
var timerHours = document.getElementById("timerHours");
var timerMinutes = document.getElementById("timerMinutes");
var timerSeconds = document.getElementById("timerSeconds");
var startBtn2 = document.getElementById("startBtn2");
var pauseBtnId = document.getElementById("pauseBtnId");

// DEFINING VARIABLES HERE
var setIntervalFunc;
var intervalHours;
var intervalMinutes;
var intervalSeconds;

// console.log(intervalSeconds);

//WRITING FUNCTIONS HERE
function timerFunction() {
  // console.log(intervalSeconds);
  if (intervalSeconds > 0) {
    intervalSeconds--;
    timerSeconds.innerHTML = intervalSeconds;
    secondsInput.value = intervalSeconds;
    // console.log("Seconds Value:", intervalSeconds);
  } else if (intervalMinutes > 0 && intervalSeconds === 0) {
    intervalMinutes--;
    intervalSeconds = 59;

    timerSeconds.innerHTML = intervalSeconds;
    secondsInput.value = intervalSeconds;

    timerMinutes.innerHTML = intervalMinutes;
    minutesInput.value = intervalMinutes;
    // console.log("Minutes Value:", intervalSeconds);
  } else if (
    intervalHours > 0 &&
    intervalMinutes === 0 &&
    intervalSeconds === 0
  ) {
    intervalHours--;
    intervalMinutes = 59;
    intervalSeconds = 59;

    timerHours.innerHTML = intervalHours;
    hoursInput.value = intervalHours;

    timerSeconds.innerHTML = intervalSeconds;
    secondsInput.value = intervalSeconds;

    timerMinutes.innerHTML = intervalMinutes;
    minutesInput.value = intervalMinutes;
    // console.log("Hours Value:", intervalHours);
  } else {
    resetBtn();
    // console.log("Countdown finished.");
    Swal.fire({
      icon: "success",
      title: "Done",
      text: "Timer completed!",
    });
  }
}

function startBtn() {
  if (hoursInput.value >= 0 && hoursInput.value < 24) {
    if (minutesInput.value >= 0 && minutesInput.value < 60) {
      if (secondsInput.value >= 0 && secondsInput.value < 60) {
        if (
          hoursInput.value !== "0" ||
          minutesInput.value !== "0" ||
          secondsInput.value !== "0"
        ) {
          selectPara.style.display = "none";
          inputDiv.style.display = "none";
          timerDiv.style.visibility = "visible";

          startBtn2.style.display = "none";
          pauseBtnId.style.display = "block";

          timerHours.innerHTML = hoursInput.value;
          timerMinutes.innerHTML = minutesInput.value;
          timerSeconds.innerHTML = secondsInput.value;

          intervalHours = Number(hoursInput.value);
          intervalMinutes = Number(minutesInput.value);
          intervalSeconds = Number(secondsInput.value);
          startTimer();
        } else {
          Swal.fire({
            icon: "warning",
            title: "Error",
            text: "You must specify Hours or Minutes or Seconds to start the timer!",
          });
        }
      } else {
        Swal.fire({
          icon: "warning",
          title: "Error",
          text: "seconds must be less 60 and not negative",
        });
      }
    } else {
      Swal.fire({
        icon: "warning",
        title: "Error",
        text: "minutes must be less 60 and not negative",
      });
    }
  } else {
    Swal.fire({
      icon: "warning",
      title: "Error",
      text: "hours must be less 24 and not negative",
    });
  }
}

function startTimer() {
  setIntervalFunc = setInterval(timerFunction, 1000);
}

function resetBtn() {
  clearInterval(setIntervalFunc);
  timerHours.innerHTML = 0;
  timerMinutes.innerHTML = 0;
  timerSeconds.innerHTML = 0;

  hoursInput.value = 0;
  minutesInput.value = 0;
  secondsInput.value = 0;

  selectPara.style.display = "block";
  inputDiv.style.display = "block";
  timerDiv.style.visibility = "hidden";
}

function pauseBtn() {
  clearInterval(setIntervalFunc);
  startBtn2.style.display = "block";
  pauseBtnId.style.display = "none";
}
