const quotes = [ // 명언 10개가 들은 Array
  {
    quote: "인생은 자신감",
    author: "by 김"
  },
  {
    quote: "설명하지못하면 아는것이 아니다",
    author: "by 이"
  },
  {
    quote: "지금 내가 못하고 모르는건 당연하다",
    author: "by 박"
  },
  {
    quote: "중요한건 포기하지않는 마음",
    author: "by 성"
  },
  {
    quote: "잘모르겠으면 뭐라도 일단 시작하자",
    author: "by 나"
  },
  {
    quote: "모르면 혼자 고민하지말고 강의를 듣자",
    author: "by 차"
  },
  {
    quote: "제 명함속에서, 저는 회사의 사장입니다 제 머릿속에서, 저는 게임 개발자입니다 하지만 제 마음속에서, 저는 게이머입니다",
    author: "by 岩田聡 | Satoru Iwata"
  },
  {
    quote: "모든 경험은 삶의 양식이 되기 때문에 인생에 헛된 경험은 없습니다",
    author: "by 宮本茂 | Shigeru Miyamoto"
  },
  {
    quote: "이미 지난일은 지난일일뿐 과거에 연연하지 마라",
    author: "by 장"
  },
  {
    quote: "자만하지 마라",
    author: "by 문"
  }
]

const quote = document.querySelector('div#quote span:first-child')
const author = document.querySelector('div#quote span:last-child')

const todaysQuote = quotes[Math.round(Math.random() * quotes.length)]

quote.innerText = todaysQuote.quote
author.innerText = todaysQuote.author