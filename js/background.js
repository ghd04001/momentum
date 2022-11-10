const images = [
  "0.jpg",
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
  "13.jpg",
  "14.jpg",
  "15.jpg",
  "16.jpg",
  "17.jpg",
  "18.jpg",
  "19.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// document.body.style.backgroundImage = `url(img/${chosenImage})`;

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
bgImage.id = "bgImage";

document.body.appendChild(bgImage);
// append는 가장 뒤에 추가, prepend는 가장 위에 추가
