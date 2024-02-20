let countEl = document.getElementById('count-el');
let btnIncrement = document.getElementById('increment');
let btnSave = document.getElementById('save')
let saveEl = document.getElementById('save-el')


let count = 0;

function increment(){
    count += 1;
    countEl.textContent = count;    //.innerText could also be used
}

btnIncrement.addEventListener('click', increment);

function save(){
    let countStr = count + " - ";
    saveEl.textContent +=  countStr;
    console.log(count);
}

btnSave.addEventListener('click', save);
