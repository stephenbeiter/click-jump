const gameframe = document.getElementById("game");
const character = document.getElementById('character');
const block = document.getElementById("block");
const block2 = document.getElementById("block2");
const score = document.getElementById("score");

const jump = () => {
  if (character.classList != "jumping") {
    character.classList.add("jumping");
  } else {
    console.log("extrajump");
    character.classList.add("extrajumping");
    setTimeout(() => { character.classList.remove("extrajumping") }, 500);
  }
  
    setTimeout(() => { character.classList.remove("jumping") }, 500);
}

const checkDead = setInterval(() => {
  let characterBottom = parseInt(window.getComputedStyle(character).getPropertyValue("bottom"));
  let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
  let block2Left = parseInt(window.getComputedStyle(block2).getPropertyValue("left"));

  if (blockLeft < 20 && blockLeft > 0 && characterBottom < -130) {
    block.style.animation = "none";
    block.style.display = "none";
    alert("doh!");
    location.reload();
  }

  if (block2Left < 20 && block2Left > 0 && characterBottom < -130) {
    block2.style.animation = "none";
    block2.style.display = "none";
    alert("doh!");
    location.reload();
  }
}, 10);

setTimeout(() => {
  block2.classList.add("startblock");
}, 5000);

const timer = () => {
  let time = 0;
  setInterval(() => { score.innerText = time++ }, 1);
};

timer();