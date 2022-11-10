// const clock = document.querySelector("h2#clock");

// // ** Intervals **
// // Interval은 '매번' 일어나야 하는 무언가를 말한다.
// // 매 2초마다 무슨 일이 일어나게 하고 싶을 때 쓰는 것이 Inteval이다.
// function sayHello() {
//   console.log("hello");
// }

// setInterval(sayHello, 5000);
// // setInterval(함수, 인터벌 기준 시간 - ms)

// // ** Timeouts **
// // Timeout은 한 번 함수를 실행시켜준다.
// setTimeout(sayHello, 5000);
// // setTimeout(함수, 인터벌 기준 시간 - ms)

// ** Date **
const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}
// padStart() function은 내가 가지고 있는 string을 보다 길게 만들어야 할 때 사용한다.
// 원하는만큼의 길이가 아니라면 string 앞쪽에 문자를 끼워넣는 것이다.

getClock();
setInterval(getClock, 1000);

const today = document.querySelector("h3#date");
const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function getDate() {
  const date = new Date();
  const years = String(date.getFullYear()).padStart(4, "0");
  const months = String(date.getMonth() + 1).padStart(2, "0");
  const dates = String(date.getDate()).padStart(2, "0");
  const days = daysOfWeek[date.getDay()];
  today.innerText = `${years}-${months}-${dates} ${days}`;
}

getDate();
setInterval(getDate, 1000);
