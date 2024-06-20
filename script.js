const turnOnBtn = document.getElementById('turnOn');
const turnOffBtn = document.getElementById('turnOff');
const lampImg = document.getElementById('lamp');

const isLampBroken = () => lamp.src.includes('quebrada');

const turnOn = () => !isLampBroken() && (lampImg.src = './img/ligada.jpg');

const turnOff = () => !isLampBroken() && (lampImg.src = './img/desligada.jpg');

const lampBroken = () => lampImg.src = './img/quebrada.jpg';

turnOffBtn.addEventListener('click', turnOff);

turnOnBtn.addEventListener('click', turnOn);

lampImg.addEventListener('dblclick', lampBroken);

lampImg.addEventListener('mouseover', turnOn);

lampImg.addEventListener('mouseleave', turnOff);
