const images = ["0.jpg","1.jpg","2.jpg"]

const randomImage = images[Math.floor(Math.random() * images.length)]

const bgImage = document.createElement("img")

bgImage.src = `img/${randomImage}`

document.body.appendChild(bgImage)