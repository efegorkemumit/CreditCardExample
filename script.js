document.querySelector('#cart-number-input').oninput =() =>{
    document.querySelector('#cart-number-box').innerText =
    document.querySelector('#cart-number-input').value;
};

document.querySelector('#cart-holder-input').oninput =() =>{
    document.querySelector('#cart-holder-name').innerText =
    document.querySelector('#cart-holder-input').value;
};

document.querySelector('#month-input').oninput =() =>{
    document.querySelector('#exp-month').innerText =
    document.querySelector('#month-input').value;
};

document.querySelector('#year-input').oninput =() =>{
    document.querySelector('#exp-year').innerText =
    document.querySelector('#year-input').value;
};

document.querySelector('#cvv-input').onmouseenter =() =>{
    document.querySelector('#front').style.display="none";
    document.querySelector('#back').style.display="block";

};

document.querySelector('#cvv-input').onmouseleave =() =>{
    document.querySelector('#front').style.display="block";
    document.querySelector('#back').style.display="none";

};

document.querySelector('#cvv-input').oninput =() =>{
    document.querySelector('#cvv-box').innerText =
    document.querySelector('#cvv-input').value;
};