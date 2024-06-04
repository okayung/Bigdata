// 검색창
// 클래스 탈부탁
// search-btn 클릭할때 search한테 is-open class add(검색창열기)
// search-close-btn 클릭할때 search한테 is-open class remove(검색창닫기)
// function() {}

let search = document.querySelector('.search');
let searchOpenBtn = document.querySelector('.search-btn');
let searchCloseBtn = document.querySelector('.search-close-btn')


function searchOpen() {
  // search한테 is-open class add(검색창열기)
  // 대상.classList.add('클래스명')
  search.classList.add('is-open');
}
// search-btn 클릭했을때
searchOpenBtn.addEventListener('click', searchOpen)

function searchClose() {
  // search 한테 is-open class remove(검색창닫기)
  search.classList.remove('is-open');
}
// search-btn 클릭했을때 
searchCloseBtn.addEventListener('click',searchClose);

// sidebar
// sidebarOpen 함수생성
// sidebar active class add / overlat class 생성
//sidebar-open-btn 클릭했을때 클릭이벤트추가

let sidebar = document.querySelector('.sidebar');
let sidebarOpenBtn = document.querySelector('.sidebar-open-btn');
let overlay = document.querySelector('.overlay')

console.log(sidebar, sidebarOpenBtn, overlay);

function sidebarOpen() {
  // sidebar active class add
  // overlay active class add
  sidebar.classList.add('active');
  overlay.classList.add('active');
}
//sidebar-open-btn 클릭했을때 클릭이벤트추가
sidebarOpenBtn.addEventListener('click', sidebarOpen);

function sidebarClose() {
  sidebar.classList.remove('active');
  overlay.classList.remove('active');
}

overlay.addEventListener('click', sidebarClose);





