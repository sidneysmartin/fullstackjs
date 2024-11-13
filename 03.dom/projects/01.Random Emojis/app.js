const emoji = document.querySelector("#emoji");

const emojis = [
  "😊",
  "😂",
  "😎",
  "😍",
  "🤩",
  "🤓",
  "🤯",
  "🤨",
  "🤡",
  "😴",
  "🤪",
  "🤠",
  "🤗",
  "🤔",
  "😐",
  "😑",
  "😒",
  "🙄",
  "🤨",
  "🤬",
  "😡",
  "😤",
  "😠",
  "😡",
  "🤬",
  "😡",
  "🤡",
];

emoji.addEventListener("mouseover", () => {
  const random = Math.floor(Math.random() * emojis.length);
  // emoji.textContent = emojis[random];
  // emoji.innerHTML = emojis[random];
  emoji.innerText = emojis[random];
});
