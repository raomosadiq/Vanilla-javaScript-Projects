

let playbutton = document.querySelector('#playbutton')
let stopbutton = document.querySelector('#stopbutton')


playbutton.addEventListener('click', function () {
    responsiveVoice.cancel();
    responsiveVoice.speak(document.getElementById('text').value, document.getElementById('voiceselection').value);
})


stopbutton.addEventListener('click', function () {
    responsiveVoice.cancel();
});