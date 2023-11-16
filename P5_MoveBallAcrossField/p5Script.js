

// Move the ball across the field---------------
// Move the ball across the field to a click.

function clickAnyWhere(e){
    // let left = e.clientX;
    // let top = e.clientY;
    let ball = document.querySelector('#ball');
    let top = e.clientY - kick.clientTop - ball.clientHeight / 2;
    let left = e.clientX - kick.clientLeft - ball.clientWidth / 2; 
    // let ball = document.getElementById('ball');

    ball.style.left = left + "px";
    ball.style.top = top + "px";
}

let kick = document.querySelector('#field');
kick.addEventListener('click', clickAnyWhere);