function createHearts() {
  const heartsContainer = document.querySelector('.hearts');
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = 5 + Math.random() * 5 + 's';
    heart.style.opacity = Math.random();
    heartsContainer.appendChild(heart);
  }
}

function showSurprise() {
  document.getElementById('popup').style.display = 'flex';
  document.getElementById('music').play();
}

function hideSurprise() {
  document.getElementById('popup').style.display = 'none';
}

window.onload = createHearts;
