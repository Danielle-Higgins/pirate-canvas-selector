const characters = document.querySelectorAll(".character");
const background = document.querySelector("#set-background");

characters.forEach((character) => {
  character.addEventListener("click", changeBg);
});

function changeBg(e) {
  //   console.log(e.target.alt);
  background.style.background = `url("./img/${e.target.alt}_bg.jpg") center no-repeat`;
  background.style.backgroundSize = "contain";
}
