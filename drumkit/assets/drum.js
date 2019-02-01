window.addEventListener('keydown', function(e){

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!audio) return; // if null , stops the function from running.
    audio.currentTime = 0; // rewind the audio back to the start
    audio.play();

});