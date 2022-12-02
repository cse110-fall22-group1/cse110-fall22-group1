let split_btn = document.querySelector('.split-button');
    console.dir(split_btn);
    split_btn.addEventListener('click', function (){
        let modal = split_btn.getAttribute("data-modal");
        document.getElementById(modal).style.display = "block";       
});
let closeBtns = document.querySelector('.close');
    closeBtns.addEventListener('click', function () {
    let modal = closeBtns.closest(".modal");
        modal.style.display = "none";
});
let button = document.querySelector('.calculate-button');
button.addEventListener('click', function() {
    let output = document.querySelector('.calculate-result');
    let cost = document.getElementById('cost').value;
    let num = document.getElementById('people').value;
    output.innerHTML = eval(`${cost} / ${num}`);
});