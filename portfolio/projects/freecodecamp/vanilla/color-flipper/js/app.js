/* #000000 (pitch black) to #ffffff (pure white)*/

let new_generation = document.getElementById("new_gen");

let clr = document.getElementById("clr_square");

const random_clr = () => {
  const random_clr = Math.floor(Math.random() * (256 * 256 * 256)).toString(16).padStart(6, '0');

  clr.innerHTML = `#${random_clr}`;
  
  document.body.style.backgroundColor = "#" + random_clr;

  new_generation = "#" + random_clr;
}
