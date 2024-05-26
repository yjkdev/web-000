
const API_KEY ="1498e326781f5e74f181e81d04462e63"

function onGeoOK(position){
  const lat = position.coords.latitude
  const lon = position.coords.longitude
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  fetch(url).then(response => response.json().then(data => {
    // URL을 fetch한다는 것은 웹 주소(URL)에 해당하는 웹 페이지나 리소스를 요청하여 그 내용을 가져오는 작업을 의미
    const weather = document.querySelector("#weather span:first-child")
    const city = document.querySelector("#weather span:last-child")
    city.innerText = data.name
    weather.innerText = `${data.weather[0].main} / ${data.main.temp}`
  })) 
  // URL에서 정보 가져오는 법
  // URL을 fetch하고 그담으로 response를 받아야함 그리고 response의 json을 얻어야 함
  // 그리고 내용을 추출했으면 data를 얻을 거야
}
function onGeoError() {
  alert("널 찾을수 없어서 날씨정보를 못주겠어")
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError)

// 8.0 Geolocation 정리
// navigator 함수를 이용해 사용자의 위치를 알아내는 코드 작성
// Geolocation은 GPS, IP 주소, Wi-Fi, 셀룰러 네트워크 정보 등의 
// 다양한 기술을 사용하여 기기나 사용자의 물리적 위치를 파악하는 과정
// onGeoOk는 위치정보를 알았을때, onGeoError는 못찾았을때

// 8.1 Weather API 정리
// https://openweathermap.org/api 에서 위도 경도 API_KEY로 사용자 위치 제공
// https://api.openweathermap.org/data/2.5/weather?lat=위도값&lon=경도값&appid=API키
// &units=metric 뒤에 붙이면 화씨온도->섭씨온도

// 프로젝트 하면서 한것들
// 시계, 인사, to do 리스트, 랜덤 명언, 랜덤 백그라운드, 날씨