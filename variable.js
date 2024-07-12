let intervalId;
let startTime;
let elapsedTime = 0;
let running = false;

const hourElement = document.querySelector('.hour');
const minuteElement = document.querySelector('.minute');
const secondElement = document.querySelector('.second');
const splitSecondElement = document.querySelector('.splitSecond');

const btnStart = document.querySelector('.btnStart');
const btnStop = document.querySelector('.btnStop');
const btnReset = document.querySelector('.btnReset');
const btnLoop = document.querySelector('.btnLoop');
const loopList = document.querySelector('.loop-list');