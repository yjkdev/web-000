// js event
const h1 = document.querySelector(".hello h1")
// 1. JS로 HTML elements 가져오기 (querySelector())
console.dir(h1)

function handleTitleClick(){
  h1.style.color = "blue"
  console.log("타이틀을 클릭 했구나");
}

function handleMouseEnter() {
  h1.innerText = "마우스 여깄어";
}  

function handleMouseLeave() {
  h1.innerText = "마우스 갔어";
} 

function handleWindowResize(){
  document.body.style.backgroundColor = "tomato"
}

function handleWindowCopy(){
  alert("복사했구나!")
}

function handleWindowOffline() {
  alert("와이파이 접속 해제!")
}

function handleWindowONline() {
  alert("와이파이 접속 중!")
}

h1.addEventListener("click", handleTitleClick) // = h1.onclick = handleTitleClick 이 두 코드는 동일하나 addEventListener를 선호하는 이유는 removeEventListener을 통해서 event listener을 제거할수있기 때문이다   
h1.addEventListener("mouseenter", handleMouseEnter)
h1.addEventListener("mouseleave", handleMouseLeave)
window.addEventListener("resize", handleWindowResize) 
window.addEventListener("copy", handleWindowCopy) // "copy"
window.addEventListener("offline", handleWindowOffline) 
window.addEventListener("online", handleWindowONline) 
// 2. 가져온 element에 event listener 추가(addEventListener(evnetType, fnName))
// 3. event발생하면 어떤 fn실행함

// 간단한 예시
function handleTitleClick() {
  const currentColor = h1.style.color;
  let newColor
  if (currentColor === "blue") {
    newColor = "tomato"
  } else {
    newColor = "blue";
  }
  h1.style.color = newColor
}

h1.addEventListener("click", handleTitleClick)
// 1. currentColor는 getter로써, 최근 color값을 복사하는 역할을 합니다. 그렇기에 의미론적으로 봤을 때 const로 선언하는 것이 적절합니다.
// 2. newColor 는 setter로써, 변수에 대입된 색상값을 h1.style.color에 최종적으로 할당하는 역할을 합니다. 그리고 이것도 의미론적으로 봤을 때 값이 변경될 수 있다는 것을 염두에 두기 위해 let으로 선언하는 것이 적절합니다.
// 3. 다들 아시겠지만 프로그래밍언어에서 "="(equal) 표시는 오른쪽에 있는 값을 왼쪽에 대입한다는 뜻입니다. 이를 염두에 두시면 코드를 이해하는데 편하실 것 같습니다.
// 4. (참고) 함수 내에서 선언된 변수는 함수 밖에서는 존재하지 않습니다. 그렇기 때문에 const currentColor로 변수 선언을 하더라도, 함수가 호출될 때 마다 새로운 값을 받을 수 있습니다.