
let remainingtime;
let tension;
let timer;
let ups;
let upm;
let uph;

function startcountdown() {
  uph = parseInt(document.getElementById("updatehour").value);
  upm = parseInt(document.getElementById("updatemin").value);
  ups = parseInt(document.getElementById("updatesec").value);

  

  if (!uph) {
    uph = 0;
  }
  if (!upm) {
    upm = 0;
  }
  if (!ups) {
    ups = 0;
  }
  
  timer = setInterval(function () {
    if (ups >= 0) {
      console.log(ups);
      ups--;
    } else {
      clearInterval(timer);
      console.log("ye seconds ka ha");
    }
  }, 1000);
}

function pausecountdown() {
  clearInterval(timer);
  remainingtime = ups;
  console.log(remainingtime, "Countdown paused");
}

function resumecountdown() {
  console.log("countdown resumed")
  tension = setInterval(function () {
    if (remainingtime >= 1) {
            remainingtime--;
            console.log(remainingtime,  "remain time ha");
    } else {
      clearInterval(tension);
    }
  }, 1000);
}

