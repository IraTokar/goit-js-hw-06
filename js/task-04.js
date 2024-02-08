const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');


let counterValue = 0;
const valueRef = document.getElementById('value');

decrementButton.addEventListener("click", decrementOnClick);
incrementButton.addEventListener("click", incrementOnClick);

function decrementOnClick(evt) {
    counterValue -= 1;
    valueRef.textContent = counterValue;
};

function incrementOnClick(evt) {
    counterValue += 1;
    valueRef.textContent = counterValue;
};
