//javascript 변수명(낙타표기법) 
let popup = document.querySelector('.popup');
let popupOpenBtn = document.querySelector('.popup-open-btn');
let popupCloseBtn = document.querySelector('.popup-close-btn');

popupOpenBtn.addEventListener('click', function(){
  popup.classList.add('is-active');
})

popupCloseBtn.addEventListener('click', function(){
  popup.classList.remove('is-active');
})

// sidebar
let sidebar = document.querySelector('.sidebar');
let sidebarOpenBtn = document.querySelector('.sidebar-open-btn');
let sidebarCloseBtn = document.querySelector('.sidebar-close-btn');
// 1.sidebaropenbar 을 클릭했을때
//  sidebar 에 is-active 클래스 추가


sidebarOpenBtn.addEventListener('click', function(){
  sidebar.classList.add('is-active')
})
sidebarCloseBtn.addEventListener('click', function(){
  sidebar.classList.remove('is-active')
})
function openSidebar(){
  // 1. sidebar 라는 클래스에 is-active 클래스 추가
  sidebar.classList.add('is-active');
}
function Closesidebar(){
  sidebar.classList.remove('is-active');
}
sidebarOpenBtn.addEventListener('click', openSidebar);
sidebarCloseBtn.addEventListener('click', Closesidebar);

// 함수 소괄호 안 :매개변수
function plus (unm1, unm2) {
  console.log(unm1 + unm2)
  console.log(unm1, unm2);
  // 실행 할 코드
}
// 함수는 호출했을 때 실행됨.
plus(100, 22);