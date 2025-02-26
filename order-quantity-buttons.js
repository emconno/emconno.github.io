let buttons = document.getElementsByClassName('quantity-button');
let increase = document.getElementsByClassName('increase');
let decrease = document.getElementsByClassName('decrease');
console.log(increase);

function increaseQuantity(element) {
    let quantityEl = element.parentNode.children[1];
    let quantityNum = Number(quantityEl.value);
    if (quantityNum < 8) {
        quantityNum++;
        quantityEl.value = quantityNum + '';
    }
}

function decreaseQuantity(element) {
    let quantityEl = element.parentNode.children[1];
    let quantityNum = Number(quantityEl.value);
    if (quantityNum > 0) {
        quantityNum--;
        quantityEl.value = quantityNum + '';
    }
}

for (let i = 0; i < increase.length; i++) {
    increase[i].onclick = () => increaseQuantity(increase[i]);
}

for (let i = 0; i < decrease.length; i++) {
    decrease[i].onclick = () => decreaseQuantity(decrease[i]);
}