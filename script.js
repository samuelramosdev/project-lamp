const turnOnBtn = document.getElementById('turnOn');
const turnOffBtn = document.getElementById('turnOff');
const lampImg = document.getElementById('lamp');

turnOffBtn.addEventListener('click', (event) => {
  event.preventDefault();
  lampImg.src != './img/quebrada.jpg' && (lampImg.src = './img/desligada.jpg');
})

turnOnBtn.addEventListener('click', (event) => {
  event.preventDefault();
  lampImg.src != './img/quebrada.jpg' && (lampImg.src = './img/ligada.jpg');
})
