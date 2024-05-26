const loginForm = document.querySelector("form#login-form")
const loginInput = document.querySelector("form#login-form input")
const greeting = document.querySelector("h1#greeting")

// const link = document.querySelector("a")
const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME)
  const input_username = loginInput.value
  // 저장될 값의 이름(key) : "username", 값(value) : input_username
  localStorage.setItem(USERNAME_KEY, input_username)
  paintGreeting(input_username)
}

function paintGreeting(input_username) {
  greeting.innerText = `Hello ${input_username}`
  greeting.classList.remove(HIDDEN_CLASSNAME)
}

const Web_savedUserName = localStorage.getItem(USERNAME_KEY)

if (Web_savedUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME)
  loginForm.addEventListener("submit", onLoginSubmit)
}