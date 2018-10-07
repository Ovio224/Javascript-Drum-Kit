const divkeys = document.querySelectorAll(".key");

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}

function remove(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

divkeys.forEach(key => key.addEventListener("transitionend", remove));
window.addEventListener("keydown", playSound);
