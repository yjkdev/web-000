const toDoForm = document.getElementById("todo-form")
const toDoInput = toDoForm.querySelector("#todo-form input")
const toDoList = document.getElementById("todo-list")

const TODOS_KEY = "todos_Key"

let toDos = []

function saveToDos() { // toDos 배열을 localStorage에 집어넣기
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}

function deleteTodo(event) {
  const parent_li = event.target.parentElement
  parent_li.remove()
  // 우리가 클릭한 parent_li와 다른 toDo는 남겨두고 싶어, 문자열을 숫자로 바꿔줌
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(parent_li.id))
  saveToDos()
} 

function paintToDo(newTodo){
  const li = document.createElement("li")
  li.id = newTodo.id
  const span = document.createElement("span")
  span.innerText = newTodo.text
  const button = document.createElement("button")
  button.innerText = "❌"
  button.addEventListener("click", deleteTodo)
  li.appendChild(span)
  li.appendChild(button) 
  toDoList.appendChild(li)
}

function handleToDoSubmit(event) {
  event.preventDefault()
  const newTodo = toDoInput.value
  // input의 현재 value를 newTodo변수에 복사
  toDoInput.value = ""
  const newTodoObj = {
    text:newTodo,
    id: Date.now()
  }
  toDos.push(newTodoObj)
  paintToDo(newTodoObj) 
  saveToDos()
} 

toDoForm.addEventListener("submit", handleToDoSubmit)

// function sayHello(item){console.log("this is", item);} 대신 밑의 화살표함수 사용용

const webSavedToDos =  localStorage.getItem(TODOS_KEY)

if(webSavedToDos !== null){
  const parsedToDos = JSON.parse(webSavedToDos)
  toDos = parsedToDos
  // parsedToDos.forEach((item) => console.log("this is", item))
  parsedToDos.forEach(paintToDo)
}

function sexyFilter() {
  
}


// JS에서 함수내에서 사용된 지역변수는 함수가 끝나면 
// 메모리에서 사라지는 걸로 알고 있는데... 
// paintToDo(newTodo)의 이렇게 argument로 들어가게 되면 
// 해당 함수의 parameter로 받을 수 있는건가요?

// handleToDoSubmit 함수 안에서 선언된 newTodo값을 
// 그냥 paintTodo 함수안에 집어넣고 
// 그 안에서 paintTodo함수를 실행한겁니다. 
// 아마 밖에서 paintTodo함수안에 대입된 
// 매개변수명이 같아서 헷갈리신거 같습니다.

// console.dir(event.target.parentElement.innerText);

// 7.3 Saving To Dos 정리
// 사용자가 form을 submit하면 우리는 input값을 비우고
// 그 텍스트(newTodo)를 toDos array에 push하고
// 그 다음에는 화면에 toDO를 그려주고
// 그리고 나서 saveToDos를 하면 돼 toDo들을 저장하는 거야

// 7.4 Loading To Dos part One 정리
// local storage에 array로 저장이 안되기 때문에 JSON.stringify로  array처럼 생긴 
// string으로 저장한 후 다시 JSON.parse 이용해 array로 꺼내는 방법
// array.foreach는 받아온 array를 for 반복문 없이 item 하나씩 function에 넣을 수 있는 함수