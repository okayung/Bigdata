let year = document.querySelector('.year');

// 한국 표준시 (Korea Standard Time)
let kst = new Date();

let getYear = kst.getFullYear(); //년도만 찾아오겠다
let getMonth = kst.getMonth();
let getDate = kst.getDate()


  
for(let i = 1920; i <= getYear; i++) {
// 방법 1
//  let options = document.createElement('option');
//   options.innerHTML = i;
//   year.appendChild(options);

// 방법 2
let options = `<option>${i}</option>`;
// 추가하고싶은곳.insertAdjacentHTM('위치', 추가할 요소)
// 위치 : afterbegin, beforebegin, afterend, beforeend,
year.insertAdjacentHTML('beforeend', options);

// jQuery
// $('.year').append('<option>' + i + '</option>');

}
