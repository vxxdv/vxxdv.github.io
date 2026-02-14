console.log("JS connected!");
const noButton = document.getElementById("no");
const yesButton = document.getElementById("yes")
const texts = [
  "Oh really?",
  "Dont.",
  "You little!",
  "No stop!"
];

noButton.addEventListener("click", () => {
  const maxX = window.innerWidth - noButton.offsetWidth;
  const maxY = window.innerHeight - noButton.offsetHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;
  noButton.style.left = randomX + "px";
  noButton.style.top = randomY + "px";
  const randomText = texts[Math.floor(Math.random() * texts.length)];
  noButton.value = randomText;
});
const yesTexts = [
  "Almost!",
  "Keep trying...",
  "Are you sure!?",
  "One more!",
  "Click the no!"
];

const finalLink = "nextPage/next.html";

let yesClicks = 0;

noButton.addEventListener("click", () => {
  const maxX = document.documentElement.clientWidth - noButton.offsetWidth;
  const maxY = document.documentElement.clientHeight - noButton.offsetHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noButton.style.left = randomX + "px";
  noButton.style.top = randomY + "px";

  const randomText = noTexts[Math.floor(Math.random() * noTexts.length)];
  noButton.value = randomText;
});

yesButton.addEventListener("click", (e) => {
  e.preventDefault();

  yesClicks++;

  if (yesClicks < 10){
    const randomText = yesTexts[Math.floor(Math.random() * yesTexts.length)];
    yesButton.value = randomText;
  } else {
    window.location.href = finalLink;
  }
});

