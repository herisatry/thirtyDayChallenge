
function playSound(e) {

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); // select audio element with corresponding data-key attribut
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); // select div's with key as a class name.
    if (!audio) return; // if null , stops the function from running.
    audio.currentTime = 0; // rewind the audio back to the start
    audio.play();
    key.classList.add('playing');

}

function removeTransition(e) {
    if ( e.propertyName !== 'transform') return; // skip all that's not a transform
    this.classList.remove('playing'); // this refers to key
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown',playSound );