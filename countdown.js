let timer;
let totalsec;
let tension;
let paused = false;
let ups;
let upm;
let uph;

function startcountdown() {
  uph = document.getElementById("updatehour");
  upm = document.getElementById("updatemin");
  ups = document.getElementById("updatesec");

  var updatehour = uph.value;
  var updatemin = upm.value;
  var updatesec = ups.value;

  if (!uph) {
    uph = 0;
  }
  if (!upm) {
    upm = 0;
  }
  if (!ups) {
    ups = 0;
  }

  totalsec = updatehour * 60 * 60 + updatemin * 60 + Number(updatesec);
  timer = setInterval(updatecountdown, 1000);
  document.getElementById("pausebutton").disabled = false;
}
function updatecountdown() {
  if (totalsec <= 0) {
    clearInterval(timer);
    alert("CountDown Finished");
  } else if (!paused) {
    totalsec--;
    var displayHours = Math.floor(totalsec / 3600);
    var displayMinutes = Math.floor((totalsec % 3600) / 60);
    var displaySeconds = totalsec % 60;

    if (document.getElementById("updatehour").value !== "") {
      document.getElementById("updatehour").value = displayHours;
    }
    if (document.getElementById("updatemin").value !== "") {
      document.getElementById("updatemin").value = displayMinutes;
    }
    if (document.getElementById("updatesec").value !== "") {
      document.getElementById("updatesec").value = displaySeconds;
    }
  }
}

function pausecountdown() {
  paused = true;
  document.getElementById("resumebutton").disabled = false;
  document.getElementById("pausebutton").disabled = true;
}

function resumecountdown() {
  paused = false;
  document.getElementById("pausebutton").disabled = false;
  document.getElementById("resumebutton").disabled = true;
}



