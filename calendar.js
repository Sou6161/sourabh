
let currentyear, currentmonth;
function displaycalendar(year, month) {
    let daysinmonth = new Date(year, month + 1, 0).getDate();
    let firstday = new Date(year, month, 1).getDay();
    let day = 1;
    let calendarHTML = '';

    let weeksinmonth = Math.ceil((daysinmonth + firstday) / 7);
    for (let i = 1; i <=weeksinmonth; i++) {
        calendarHTML += '<tr>';
    
        for (let j = 1; j <= 7; j++) {
            console.log(firstday,"firstdayyyy");
            console.log(day,"dayyyy");
            console.log(daysinmonth,"daysinmonth");
            if ((i == 1 && j <= firstday) || (day > daysinmonth)) {
                calendarHTML += '<td></td>';
            }
            else {
                calendarHTML += `<td>${day}</td>`;
                day++;
            }
        }
        calendarHTML += '</tr>';
    }
    //console.log(calendarHTML,"calenderrrrrrrrrrr");
document.getElementById('calendar-body').innerHTML = calendarHTML;

let monthyearname = document.getElementById('month-year');
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
    let months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    return months[monthindex];
}

let today = new Date();
currentyear = today.getFullYear();
currentmonth = today.getMonth();


displaycalendar(currentyear, currentmonth);


