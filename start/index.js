const clock = () => {
    const clockElement = document.querySelector('.clock');
    time = new Date();
    hour = time.getHours();
    min = time.getMinutes();
    sec = time.getSeconds();

    if (hour < 10) {
        hour = '0' + hour;
    }
    if (min < 10) {
        min = '0' + min;
    }
    if (sec < 10) {
        sec = '0' + sec;
    } 

    clockElement.innerHTML = `${hour}:${min}:${sec}`;
}

setInterval(clock, 10);


const timetable = () => {
    const timetableElement = document.querySelector('.timetable');
    const timetable = [[["", ""], ["Pure Maths", "29"], ["Pure Maths", "29"], ["", ""], ["Computing", "53"], ["PerDev", "6"]], [["", ""], ["Computing", "53"], ["Computing", "1"], ["", ""], ["Pure Maths", "80"], ["Geography", "28"]], [["Statistics", "54"], ["", ""], ["", ""], ["Design Tech", "43"], ["Geography", "29"], ["Computing", "53"]], [["Statistics", "80"], ["Geography", "29"], ["Geography", "29"], ["", ""], ["", ""], ["Computing", "53"]], [["Pure Maths", "80"], ["", ""], ["Geography", "29"], ["Danish", "12"], ["Computing", "53"], ["Geography", "29"]]];
    const day = new Date().getDay();
    const time =  new Date().getHours() + new Date().getMinutes() / 60;
    const clockElement = document.querySelector('.clock');
    let lesson = ["", ""]
    
    if (day < 6) {

        if (time >= (8 + 50/60) && time < (9 + 40/60)){
            lesson = timetable[day][0];
        }
        else if (time >= (9 + 40/60) && time < (10 + 30/60)){
            lesson = timetable[day][1];
        }
        else if (time >= (10 + 45/60) && time < (11 + 35/60)){
            lesson = timetable[day][2];
        }
        else if (time >= (11 + 35/60) && time < (12 + 25/60)){
            lesson = timetable[day][3];
        }
        else if (time >= (13 + 25/60) && time < (14 + 15/60)){
            lesson = timetable[day][4];
        }
        else if (time >= (14 + 15/60) && time < (15 + 5/60)){
            lesson = timetable[day][5];
        }
        else {
            lesson = ["", ""];
        }
        console.log(lesson);
    }
    if (lesson[0] != "") {
        timetableElement.innerHTML = `${lesson[0]} - ${lesson[1]}`;
    } else {
        timetableElement.innerHTML = "";
        clockElement.setAttribute("style", "grid-column: span 5; text-align: center;");

    }
}
window.onload = timetable;
setInterval(timetable, 1800000);