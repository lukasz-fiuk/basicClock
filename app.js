class Clock {
  constructor() {
    this.seconds = document.querySelector(".clock__seconds");
    this.minutes = document.querySelector(".clock__minutes");
    this.hours = document.querySelector(".clock__hours");
    this.city = document.querySelector(".clock__city");
  }
  setTime() {
    this.date = new Date();
    this.secNow = this.date.getSeconds() * 6;
    this.minNow = this.date.getMinutes() * 6;
    this.hourNow = this.date.getHours() * 30;
    this.seconds.style.transform = `rotate(${this.secNow}deg)`;
    this.minutes.style.transform = `rotate(${this.minNow}deg)`;
    this.hours.style.transform = `rotate(${this.hourNow}deg)`;
  }
}

const newClock = new Clock();
setInterval(function () {
  newClock.setTime();
}, 1);
