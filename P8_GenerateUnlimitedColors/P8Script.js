const startbtn = document.querySelector('#start');
const stopbtn = document.querySelector('#stop');
let randonNum = Math.floor(Math.random());
let body = document.querySelector('body');
let time;

function gnrtColors() {

    // console.log(`rgb : ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}`);
    if (!time) {
        time = setInterval(() => {
            let randomCol = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 255)})`;
            document.querySelector('body').style.background = randomCol;
            // document.querySelector('body').style.background = 'rgb(12, 245, 158)';
            // console.log(randomCol);
            console.log(time);   // to see the interval id
        }, 1000);  
    };
};

function stopintrvl() {
    clearInterval(time);
    time = null;
    console.log(time);
    // document.querySelector('body').style.background = '#212121'; // for reset to the original  body colorl after stop
};


startbtn.addEventListener('click', gnrtColors);
stopbtn.addEventListener('click', stopintrvl);
