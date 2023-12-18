 /*/ <!DOCTYPE html>
<html>
  <head>
    <style>
      #inputArea {
        margin-bottom: 20px;
      }
    </style>
  </head>
  <body>
    <div id="inputArea">
      <input type="number" id="hours" placeholder="Hours" />
      <input type="number" id="minutes" placeholder="Minutes" />
      <input type="number" id="seconds" placeholder="Seconds" />
      <button onclick="startCountdown()">Start</button>
    </div>

    <script>*/
      function startCountdown() {
        var hoursInput = document.getElementById("hours");
        var minutesInput = document.getElementById("minutes");
        var secondsInput = document.getElementById("seconds");

        var hours = hoursInput.value;
        var minutes = minutesInput.value;
        var seconds = secondsInput.value;

        var totalSeconds = hours * 60 * 60 + minutes * 60 + Number(seconds);
        var intervalId = setInterval(function () {
          if (totalSeconds <= 0) {
            clearInterval(intervalId);
            alert("Time is up!");
          } else {
            totalSeconds--;
            var displayHours = Math.floor(totalSeconds / 3600);
            var displayMinutes = Math.floor((totalSeconds % 3600) / 60);
            var displaySeconds = totalSeconds % 60;

            // Update the input fields
            if (hoursInput.value !== "") {
              hoursInput.value = displayHours;
            }
            if (minutesInput.value !== "") {
              minutesInput.value = displayMinutes;
            }
            if (secondsInput.value !== "") {
              secondsInput.value = displaySeconds;
            }
          }
        }, 1000);
      }


