

let date = document.getElementById('date');
let time = document.getElementById('time');
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');

function clock() {
  var monthname = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  let today = new Date();
  date.innerHTML = (days[today.getDay()] + " " + today.getDate() + " " + monthname[today.getMonth()] + " " + today.getFullYear());

  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  let ampm = h >= 12 ? 'PM' : 'AM';

   h = h % 12; 
   h= h === 0 ? 12:h;
  h = h < 10 ? '0' + h : h;
  m = m < 10 ? '0' + m : m;
  s = s < 10 ? '0' + s : s;

  time.innerHTML = `${h}:${m}:${s} ${ampm}`;
  hours.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;
}

var inter = setInterval(clock, 400);