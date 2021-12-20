document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('a');
  const play = (index) => {
    let audio = new Audio(`./audio/key-${index}.mp3`);
    audio.play();
  };
  links.forEach((link, index) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      play(index + 1);
    });
  });
});
