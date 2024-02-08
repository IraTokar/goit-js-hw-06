const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');




function onInput(evt) {
    outputName.textContent = inputName.value !== '' ? evt.currentTarget.value : 'Anonymous';
}

inputName.addEventListener('input', onInput);