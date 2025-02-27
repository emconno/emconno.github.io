let buttons = document.getElementsByClassName('quantity-button');
let increase = document.getElementsByClassName('increase');
let decrease = document.getElementsByClassName('decrease');
console.log(increase);


let sliceNum = document.getElementById('slice-num');

let topping = document.getElementsByClassName('topping');
let drink = document.getElementsByClassName('drink');
let condiment = document.getElementsByClassName('condiment');

function getItemSum(itemList) {
    let sum = 0;

    for(let i = 0; i < itemList.length; i++) {
        sum += Number(itemList[i].value);
    }

    return sum;
}

console.log(sliceNum.value);

function selectItemList(element) {
    switch (element.parentNode.parentNode.parentNode.id) {
        case 'toppings':
            return topping;
            break;
        case 'drinks':
            return drink;
            break;
        case 'condiments':
            return condiment;
            break;
        default:
            break;
    }
}

function increaseQuantity(element) {
    let quantityEl = element.parentNode.children[1];
    let quantityNum = Number(quantityEl.value);
    if (!quantityEl.isEqualNode(sliceNum)) {
        let itemList = selectItemList(quantityEl);
        if(getItemSum(itemList) < Number(sliceNum.value)) {
            quantityNum++;
            quantityEl.value = quantityNum + '';
        }
    } else if (quantityNum < 8) {
        quantityNum++;
        quantityEl.value = quantityNum + '';
    }
}

function decreaseQuantity(element) {
    let quantityEl = element.parentNode.children[1];
    let quantityNum = Number(quantityEl.value);
    if (quantityNum > Number(quantityEl.min)) {
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