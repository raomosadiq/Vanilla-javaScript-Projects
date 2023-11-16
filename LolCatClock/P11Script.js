 //  all other functions declerations start here
 const catAction = document.querySelector('#timeEvent');
 var lolcatImage = document.getElementById('lolcatImage');
 let hour = new Date().getHours();

 // For wake up
 var selectWkpTime = document.querySelector('#wakeUpTimeSelector');
 var selectedOption = selectWkpTime.options[selectWkpTime.selectedIndex];
 var slct = selectedOption.value;

 // For lunch
 var selectLnTime = document.querySelector('#lunchTimeSelector');
 var selectedOption2 = selectLnTime.options[selectLnTime.selectedIndex];
 var slct2 = selectedOption2.value;

 // For nap
 var selectNapTime = document.querySelector('#napTimeSelector');
 var selectedOption3 = selectNapTime.options[selectNapTime.selectedIndex];
 var slct3 = selectedOption3.value;

 // For party time
 let partyTime = document.querySelector('#partyTimeButton');

function showTime() {

    let date = new Date();
    let options = { timeZone: 'Asia/Karachi', hour12: true };
    let localTime = date.toLocaleTimeString('en-US', options);
    let timeParts = localTime.split(':');
    let h = parseInt(timeParts[0]);
    let m = parseInt(timeParts[1]);
    let s = parseInt(timeParts[2]);
    let formattedTime = document.querySelector('#clock');
    formattedTime.textContent = `${h < 10 ? '0' : ''}${h}:${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s} PM`;

};


window.addEventListener('load', function () {
    setInterval(showTime, 1000);
});


let time = setInterval(function () {
    if (partyTime.classList.contains("party")) {
        lolcatImage.src = 'https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg';
        catAction.innerHTML = 'Party Time!'
    } else {
        if (hour > slct && hour!= slct && hour < slct2) {
            lolcatImage.src = "https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a.jpeg";
            catAction.innerHTML = 'GOOD MORNING!'
        } else if (hour > slct2 && hour!= slct2 && hour < slct3) {
            lolcatImage.src = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
            catAction.innerHTML = 'GOOD EVENING!'
        } else if(hour > slct3 && hour!= slct3){
            lolcatImage.src = 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Cat_sleep.jpg';
            catAction.innerHTML = 'GOOD NIGHT!'
        } 
    }

})


//  Set wakeup time

function setWakeUpTime() {
    selectedOption = selectWkpTime.options[selectWkpTime.selectedIndex];
    slct = selectedOption.value;
    // console.log(slct);

    if (hour == slct) {
        // console.log("work")
        catAction.innerHTML = 'WAKE UP!'

        lolcatImage.src = 'https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg';
    } 
}


//      Set lunch time
function setLunchTime() {
    selectedOption2 = selectLnTime.options[selectLnTime.selectedIndex];
    slct2 = selectedOption2.value;
    // console.log(slct);

    if (hour == slct2) {
        // console.log("work")
        catAction.innerHTML = "LET'S HAVE SOME LUNCH!"

        lolcatImage.src = 'https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg';
    } 
}


// Set nap time
function setNapTime() {
    selectedOption3 = selectNapTime.options[selectNapTime.selectedIndex];
    slct3 = selectedOption3.value;
    // console.log(slct);

    if (hour == slct3) {
        // console.log("work")
        catAction.innerHTML = "SLEEP TIGHT!"

        lolcatImage.src = 'https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg';
    } 
}

function partTime(e) {
    e.target.classList.toggle('party');
    if (document.querySelector('#partyTimeButton').classList.contains("party")){
     e.target.textContent = "PARTY OVER!"
    }else {
     e.target.textContent = "PARTY TIME!"
    }
}


selectWkpTime.addEventListener('change', setWakeUpTime);
selectLnTime.addEventListener('change', setLunchTime);
selectNapTime.addEventListener('change', setNapTime);
partyTime.addEventListener('click', partyTime);


document.querySelector('#partyTimeButton').textContent = "PARTY TIME!"
