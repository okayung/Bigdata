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
let items = document.querySelectorAll('.item');


// Vanilla Js
// querySelectorAll에서 찾은거 중에 첫번째 스타일 색깔을 blue
document.querySelectorAll('.item')[0].style.color = 'blue';
// querySelectorAll에서 찾은거 중에 두번째 스타일 색깔을 blue
document.querySelectorAll('.item')[1].style.color = 'blue';
// querySelectorAll에서 찾은거 중에 세번째 스타일 색깔을 blue
document.querySelectorAll('.item')[2].style.color = 'blue';

// j-Query
$('.item').css('color','red');

// 반복문 for
for(let i = 0; i < items.length; i++) {
  items[i].innerHTML = 'for반복문';
  // console.log(i);
}

// 배열 반복 forEach
// 배열.forEach((item) => {});

// items.forEach((item) => {
//   item.innerHTML = 'ㅠㅠㅠ'; })


// 자료형
// number
let num = 5;
// Srting ''안에 들어가면 문자로 인식
let num1 = '5';
let txt = 'hello'
// 숫자,문자,변수 
// 문자열만 '' 안에 넣기
console.log(num1);
console.log(typeof(num1));
console.log(typeof('txt'));
console.log(txt);
console.log(typeof(txt));

// Array, Object
// 여러자료(값)를 한번에 담을 때 사용
// Array(배열) : []
// Object : {}

let arr = ['name', 123, 'ggggg', txt];
// 배열에서 원하는 값 가져오기 => 배열이름[숫자]
console.log(arr[3]);

// {key : value}
let tel = 123456789;
let obj = { 
  이름 : '경',
  전화 : tel,
  주소 : '세종시'
}
console.log(obj)
console.log(obj.전화)


let hi = '안녕하세요 저는';
let name = '옥경';
// 변수, 문자열
// 변수 + 문자열
// ``backtick ${변수명}
let my = hi + name +'입니다';
let my1 = `안녕하세요 저는 ${name} 입니다`
// 문자열-> '', "",  `` 사용하기
console.log(hi, name)
console.log(my)
console.log(my1)
console.log(typeof(my1))

// 매개변수(parameter)로 이름값
function info(myName){
  console.log(`안녕하세요 저는 ${myName}입니다`);
}
info('경');

// Array(배열) : [], Object :{}
// 배열 원하는 값/ 배열이름[num]/ 배열의 시작은 0 부터
// Object 원하는 값/ 오브젝트 이름.키값
// key : value, key : value
// 여러 값을 입력하고싶을 때 , 로 구분

// 변수, 문자열
// 문자열 : '', "",  ``(따옴표, 큰따옴표, 백틱)

// 문자열 사이에 변수 바인딩 하는 두가지 방법
// + :변수 + '문자열' : '안녕'+ name + '나는' + age(변수)
// `` 사용시 : `안녕 ${name} 나는 ${age} ->${} 으로 사용

// 매개변수(parameter)
// 함수를 호출할 때 함수를 넘겨주는 값

