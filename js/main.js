(() => {
let keys = Array.from(document.querySelectorAll('.key'));

keys.forEach(key => key.addEventListener('transitionend', resetKey));

  function resetKey() {
    this.classList.remove('playing');
  }

  function playSound(event) {
    // debugger;
    let audioElement = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    let key = document.querySelector(`div[data-key="${event.keyCode}"]`);

    // the ! is a check for inequality (it means the condition is flase)
    // also called a bang operator
    // if there is no matching audioelement, then kills the function and do nothing

    if (!audioElement) { return }
    // if we have a match, then play the sound that goes with the keyboard keys
    audioElement.currentTime = 0; //no brackets mean it's a property
    audioElement.play(); // round brackets means this is  method- a built-in fumction

    key.classList.add('playing');
  }

  //add an eventlistener to the window
  // and capture all the keyboard key presses
  window.addEventListener('keydown', playSound);
})();
