// mode-btn class 을 가져오기
// 텍스트가 Dark 일 경우(조건)
// mode-btn 클릭하면 텍스트를 Light 로 바꾼다
// header 태그에 dack class add

let modeBtn = document.querySelector('.mode-btn');
let count = 0;

function modeToggle() {
  let modeTxt = modeBtn.innerHTML;

  let header = document.querySelector('header');
  count = count +1;
  // count+= 1; 같은사용법 count = count +;
  console.log(count)
  // 1,3,5,7 => Darkmode
  // 2,4,6,8 => Lightmode
  if(count % 2 == 0 ) {
    this.innerHTML = 'Dark';
    header.classList.remove('dark')
  } else {
    this.innerHTML = 'Light';
    header.classList.add('dark')
  }
}
 modeBtn.addEventListener('click', modeToggle )

//    if(modeTxt == 'Dark') {
//      modeBtn.innerHTML = 'Light';
//     // header 태그에 dack class add
//     header.classList.add('dark');
//    } else {
//      modeBtn.innerHTML = 'Dark'
//      header.classList.remove('dark');
//    }
// }
// modeBtn.addEventListener('click', modeToggle )


// 
// let modeBtn = document.querySelector('.mode-btn');

// function modeToggle() {
//   let modeTxt = modeBtn.innerHTML;

//   let header = document.querySelector('header');
//    if(modeTxt == 'Dark') {
//      modeBtn.innerHTML = 'Light';
//     // header 태그에 dack class add
//     header.classList.add('dark');
//    } else {
//      modeBtn.innerHTML = 'Dark'
//      header.classList.remove('dark');
//    }
// }
// modeBtn.addEventListener('click', modeToggle )







// let header = document.querySelector('header')
// let button = document.querySelector('button')

// header.addEventListener('click',()=>{
//   header.innerHTML = '#fff';
//   header.style.backgroundColor = '#000';
// })

// button.addEventListener('click',()=>{
//   button.style.color = '#000';
//   button.innerText = 'light';
//   button.style.backgroundColor = "#fff"
// })