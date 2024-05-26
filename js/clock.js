const clock = document.querySelector("h2#clock")

function getClock() {
  const date = new Date()
  const hours = String(date.getHours()).padStart(2, "0")
  const minutes = String(date.getMinutes()).padStart(2, "0")
  const second = String(date.getSeconds()).padStart(2, "0")
  // clock.innerText = (`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
  clock.innerText=`${hours}:${minutes}:${second}`
}

setInterval(getClock, 1000) // 1초마다 새로운 Date object를 생성