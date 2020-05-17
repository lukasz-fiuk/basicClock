class Clock {
  constructor() {
    this.seconds = document.querySelector(".clock__seconds");
    this.minutes = document.querySelector(".clock__minutes");
    this.hours = document.querySelector(".clock__hours");
    this.city = document.querySelector(".clock__city");
    this.listCities = document.querySelector(".list--cities")
    this.listItem = document.getElementsByClassName("list__item")

  }
  setTime(timeZone) {
    this.date = new Date();
    this.secNow = this.date.getSeconds() * 6;
    this.minNow = this.date.getMinutes() * 6;
    this.hourNow = this.date.getHours() * 30;
    this.seconds.style.transform = `rotate(${this.secNow}deg)`;
    this.minutes.style.transform = `rotate(${this.minNow}deg)`;
    this.hours.style.transform = `rotate(${this.hourNow + (timeZone*30)}deg)`;
  }
timeZone(e){
for(let i = 0; i< this.listCities.children.length;i++){
  this.listItem[i].classList.remove("active")
}
switch(e.target.innerText){
  case "London":
    this.setTime(-1)
    break
  case "Warsaw":
    this.setTime(0)
    break
  case "New York":
    this.setTime(-6)
    break
  case "Berlin":
    this.setTime(0)
    break
  case "Tokyo":
    this.setTime(7)
    break
  case "Oslo":
    this.setTime(0)
    break
  case "Moscow":
    this.setTime(1)
    break
  case "Sydney":
    this.setTime(8)
    break
  case "Roma":
    this.setTime(0)
    break
  case "Singapore":
    this.setTime(+6)
    break
}
this.city.innerText = e.target.innerText
e.target.classList.add("active")

}
}
const newClock = new Clock();
setInterval(function () {
  newClock.setTime();
}, 300);

newClock.listCities.addEventListener("click", function(e){
  newClock.timeZone(e)
})
