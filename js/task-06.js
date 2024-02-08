const inputRef = document.getElementById('validation-input');

inputRef.addEventListener('blur', onBlurBorderColor);

function onBlurBorderColor(evt) {
    const inputDataLength = Number(inputRef.dataset.length);
    const inputValueLength = Number(inputRef.value.trim().length);

    if (inputDataLength === inputValueLength) {
        inputRef.classList.add('valid');
        inputRef.classList.remove('invalid');
    } else {
        inputRef.classList.remove('valid');
        inputRef.classList.add('invalid')
    }

}