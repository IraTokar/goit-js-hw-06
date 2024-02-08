function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
/* <div class="widget">
  <p>Background color: <span class="color">-</span></p>
  <button type="button" class="change-color">Change color</button>
</div> */


const colorName = document.querySelector('.color');
const changeColor = document.querySelector('.change-color');
const body = document.body;

changeColor.addEventListener('click', colorGeneration);

function colorGeneration(evt) {
    colorName.textContent = body.style.backgroundColor = getRandomHexColor();
};



