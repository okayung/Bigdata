// html #hello 찾아오기
// querySelectotor('.클래스이름')
let hello = document.getElementById('hello');
let cahangBtn = document.getElementById('txt-change-btn');

// hello 클릭했을 때 html '안녕?', color->red
hello.innerHTML = '안녕?';
hello.style.color = 'red';

// cahangBtn 클릭 했을 때 html 'hello', color->blue
cahangBtn.addEventListener('click',() => {
  hello.innerHTML = 'hello';
  hello.style.color = 'blue';
})
// querySelector 하나만 찾아옴
// querySelectorAll 중복클래스 모두찾는다
let item = document.querySelectorAll('.item');

// Vanilla Js
// querySelectorAll에서 찾은거 중에 첫번째 스타일 색깔을 blue
document.querySelectorAll('.item')[0].style.color = 'blue';
// querySelectorAll에서 찾은거 중에 두번째 스타일 색깔을 blue
document.querySelectorAll('.item')[1].style.color = 'blue';
// querySelectorAll에서 찾은거 중에 세번째 스타일 색깔을 blue
document.querySelectorAll('.item')[2].style.color = 'blue';

// j-Query
$('.item').css('color','red');

 