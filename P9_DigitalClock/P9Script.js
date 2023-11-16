



//     ++++++++++++++++++++++++++++++++++++++   This is my code for Locale Time Zone (Pakistan) [GMT + 5]    +++++++++++++++++++++++++++++++++++++++++++++++++++

function showTime() {

    let date = new Date();
    let options = { timeZone: 'Asia/Karachi', hour12: true };
    let localTime = date.toLocaleTimeString('en-US', options);
    let timeParts = localTime.split(':');
    let h = parseInt(timeParts[0]);
    let m = parseInt(timeParts[1]);
    let s = parseInt(timeParts[2]);
    let formattedTime = document.querySelector('#MyClockDisplay');
    formattedTime.textContent = `${h < 10 ? '0' : ''}${h}:${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s} PM`;

};

window.addEventListener('load', function () {
    setInterval(showTime, 1000);
});





//     ++++++++++++++++++++++++++++++++++++++   This is my code for  “universal” UTC time [Greenwich mean time]    +++++++++++++++++++++++++++++++++++++++++++++++++++

// function showTime() {
// let date = new Date();
// let h;
// let m;
// let s;

// totalMilSec = date.getTime()
// // // console.log(totalMilSec);

// s = Math.floor(totalMilSec / 1000) % 60;
// // console.log(Math.floor(s));

// m = Math.floor(totalMilSec / 1000 / 60) % 60;
// // console.log(Math.floor(m));

// h = Math.floor(totalMilSec / 1000 / 60 / 60) % 24;
// // console.log(Math.floor(h));
// let formattedTime = document.querySelector('#MyClockDisplay');
// formattedTime.textContent = `${h < 10 ? '0' : ''}${h}:${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s} PM`;


// if (h >= 12) {
//     formattedTime.textContent = `${h < 10 ? '0' : ''}${h}:${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s} PM`;
// } else {
//     formattedTime.textContent = `${h < 10 ? '0' : ''}${h}:${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s} AM`;

// };

// };

// window.addEventListener('load', function () {
//     setInterval(showTime, 1000);
// });






//      +++++++++++++++++++++++++++++++ This method is given by the google's website    (Just for remember) ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function showTime(){
//     var date = new Date();
//     var h = date.getHours(); // 0 - 23
//     var m = date.getMinutes(); // 0 - 59
//     var s = date.getSeconds(); // 0 - 59
//     var session = "AM";
    
//     if(h == 0){
//         h = 12;
//     }
    
//     if(h > 12){
//         h = h - 12;
//         session = "PM";
//     }
    
//     h = (h < 10) ? "0" + h : h;
//     m = (m < 10) ? "0" + m : m;
//     s = (s < 10) ? "0" + s : s;
    
//     var time = h + ":" + m + ":" + s + " " + session;
//     document.getElementById("MyClockDisplay").innerText = time;
//     document.getElementById("MyClockDisplay").textContent = time;
    
//     setTimeout(showTime, 1000);
    
// }

// showTime();