//countdown code starts from here

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

//calender code starts from here

let currentyear, currentmonth;
function displaycalendar(year, month) {
  let daysinmonth = new Date(year, month + 1, 0).getDate();
  let firstday = new Date(year, month, 1).getDay();
  let day = 1;
  let calendarHTML = "";

  let weeksinmonth = Math.ceil((daysinmonth + firstday) / 7);
  for (let i = 1; i <= weeksinmonth; i++) {
    calendarHTML += "<tr>";

    for (let j = 1; j <= 7; j++) {
      console.log(firstday, "firstdayyyy");
      console.log(day, "dayyyy");
      console.log(daysinmonth, "daysinmonth");
      if ((i == 1 && j <= firstday) || day > daysinmonth) {
        calendarHTML += "<td></td>";
      } else {
        calendarHTML += `<td>${day}</td>`;
        day++;
      }
    }
    calendarHTML += "</tr>";
  }
  console.log(calendarHTML, "calenderrrrrrrrrrr");
  document.getElementById("calendar-body").innerHTML = calendarHTML;

  let monthyearname = document.getElementById("month-year");
  monthyearname.textContent = `${getmonthname(month)} ${year}`;
}
function prevMonth() {
  currentmonth--;
  if (currentmonth < 0) {
    currentmonth = 11;
    currentyear--;
  }
  displaycalendar(currentyear, currentmonth);
}

function nextMonth() {
  currentmonth++;
  if (currentmonth > 11) {
    currentmonth = 0;
    currentyear++;
  }
  displaycalendar(currentyear, currentmonth);
}

function getmonthname(monthindex) {
  let months = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return months[monthindex];
}

let today = new Date();
currentyear = today.getFullYear();
currentmonth = today.getMonth();

displaycalendar(currentyear, currentmonth);
