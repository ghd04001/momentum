// ** Utilize HTML Inner Functions ** (JS can be replaced by HTML)
// const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");

// function onLoginBtnClick() {
//   const username = loginInput.value;
//   if (username === "") {
//     alert("Please write your name.");
//   } else if (username.length > 15) {
//     alert("Your name is too long.");
//   }
// }

// loginButton.addEventListener("click", onLoginBtnClick);

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
// 일반적으로 string만 포함된 변수는 대문자로 표기하고 string을 저장하고 싶을 때 사용한다.
// string을 작성하다가 오타가 나면 JS는 이것을 지적하지 않지만, 변수명이 오타가 나면 JS가 지적해주기 때문.
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  // default 행동들이 무엇이든지 발생되지 않도록 막음.
  // 기본 행동(default behavior): 어떤 function에 대해 브라우저가 기본적으로 수행하는 동작
  // console.log(event);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  // ** Saving Username **
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

// ** Practice with Link **
// const link = document.querySelector("a");
// function handleLinkClick(event) {
//   event.preventDefault();
//   console.dir(event);
//   // alert("clicked!");
// }
// link.addEventListener("click", handleLinkClick);
// clicked! 라는 경고가 표시된 후, 확인을 누르면 기본 동작이 실행됨.
// addEventListener 안에 있는 함수는 직접 실해하지 않는다.
// 나는 JS한테 함수의 이름만 주고, 실행하는 것은 JS의 몫이다.
// handleLinkClick({information about the event that just happend})

// ** Loading Username **
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
  // 브라우저는 우선 onLoginSubmit function을 호출하고
  // event로부터 어쩌면 중요할지도 모르는 정보를 잡아내어
  // 첫 번째 argument로써 추가적인 정보를 가진 채로 실행버튼을 누른다.
  // onLoginSubmit({information about the event that just happend}})
} else {
  paintGreetings(savedUsername);
}

function paintGreetings(username) {
  // greeting.innerText = "Hello " + username;
  greeting.innerText = `Hello ${username}`;
  // 변수와 string을 결합하는 방법, 변수를 string안에 포함시키는 방법
  // ${변수명} 형식으로 표현하면 된다. 단, `(백틱) 기호로 시작하고 끝나야 한다.
  greeting.classList.remove(HIDDEN_CLASSNAME);
}
