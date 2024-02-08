/* <input id="font-size-control" type="range" min="16" max="96" />
    <br />
    <span id="text">Abracadabra!</span> */

const inputControl = document.getElementById('font-size-control');
const controlText = document.getElementById('text');

inputControl.addEventListener('input', fontSizeControl);

function fontSizeControl(evt) {
    controlText.style.fontSize = evt.currentTarget.value + 'px' ;
}