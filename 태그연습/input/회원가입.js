
let kst = new Date();
let getYear = kst.getFullYear(); 
let getMonth = kst.getMonth();
let getDate = kst.getDate();

let year = document.querySelector('.year');
for(let i=1920; i<=getYear; i++) {
    let years = `<option value="${i}">${i}</option>`;
    year.insertAdjacentHTML('beforeend', years);
}

let month = document.querySelector('.month');
for(let a=1; a<=12; a++) {
    let options = document.createElement('option');
    options.innerHTML = a;
    month.appendChild(options);
   
}
let date = document.querySelector('.date');
for(let b=1; b<=31; b++) {
    let options = document.createElement('option');
    options.innerHTML = b;
    date.appendChild(options);
}