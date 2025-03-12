let buttons = document.getElementsByClassName('quantity-button');
let increase = document.getElementsByClassName('increase');
let decrease = document.getElementsByClassName('decrease');

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
    //get the button element's corresponding input type="number" element from the document
    let quantityEl = element.parentNode.children[1];
    //get the value of the input as an integer
    let quantityNum = Number(quantityEl.value);

    //if the input is not associated with the number of slices
    if (!quantityEl.isEqualNode(sliceNum)) {
        //get the list of inputs associed with the input's category (toppings/drinks/condiments)
        let itemList = selectItemList(quantityEl);
        //if the # of selected toppings/drinks/condiments does not exceed the # of slices
        if(getItemSum(itemList) < Number(sliceNum.value)) {
            //increment the input value
            quantityNum++;
            quantityEl.value = quantityNum + '';
        }
    } else if (quantityNum < 8) {
        //cap the # of slices input value at 8
        quantityNum++;
        quantityEl.value = quantityNum + '';
    }
}

function decreaseQuantity(element) {
    //get the button element's corresponding input type="number" element from the document
    let quantityEl = element.parentNode.children[1];
    //get the value of the input as an integer
    let quantityNum = Number(quantityEl.value);
    if (quantityNum > Number(quantityEl.min)) {
        //decrement the input value
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