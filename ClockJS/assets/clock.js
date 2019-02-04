//const secondHand = document.querySelector('.second-hand');
//const minHand = document.querySelector('.min-hand');
//const hourHand = document.querySelector('.hour-hand');
function setDate(){
    const now = new Date();
    const seconds = now.getSeconds(); //get seconds of the current minutes.
    const secondsDegrees = ((seconds / 60) *360) + 90; // 90 deg is for the offset we added in the css.

    /*minutes */

    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) *360) + 90;

    /*hours */

    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) *360) + 90;

    document.querySelector('.second-hand').style.transform = `rotate(${secondsDegrees}deg)`;
    document.querySelector('.min-hand').style.transform = `rotate(${minutesDegrees}deg)`;
    document.querySelector('.hour-hand').style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate,1000);