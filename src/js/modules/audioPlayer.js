export function initAudioPlayer() {
  const players = document.querySelectorAll('.audio-player');
  
  players.forEach(player => {
    const audio = player.querySelector('audio');
    const playBtn = player.querySelector('.play-btn');
    
    playBtn?.addEventListener('click', () => {
      if (audio.paused) {
        audio.play();
        playBtn.textContent = 'Pause';
      } else {
        audio.pause();
        playBtn.textContent = 'Play';
      }
    });
  });
}