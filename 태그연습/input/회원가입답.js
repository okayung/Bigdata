//복합대입연산자
let idVeri = pwVeri = pwChkveri = false;
console.log(idVeri, pwVeri, pwChkveri);

let userid = document.getElementById('userid');
let idWarn = document.querySelector('.id-warn');


let year = document.getElementById('year');
let month = document.getElementById('month');
let date = document.getElementById('date');

let kst = new Date();
let getYear = kst.getFullYear();

//keyup : 키를 눌렀다가 놨을때 발생
//focusout : 마우스 커서 위치가 바깥쪽일때
userid.addEventListener('focusout', function() {
//userid.value => input 입력된 텍스트
//userid.value.lenght => input 텍스트길이
  if(userid.value.length < 8 ) {
  //8글자 미만일때 '아이디를 8글자이상 입력하세요'(color : red)
    idWarn.innerHTML = `<span class="txt-red">아이디를 8글자이상 입력하세요</span>`;
  } else {
  //8글자 이상일때 '멋진아이디네요!'(color : green)
  idVeri = true;
  idWarn.innerHTML = `<span class="txt-green">멋진아이디네요!</span>`;
}  
})

let userpw = document.getElementById('userpw');
let pwWarn = document.querySelector('.pw-warn');

userpw.addEventListener('focusout', function(){
//1. 비밀번호 자릿수 (최소 8자에서 16자까지)
//2. 최소 하나 이상의 영문자 (소문자 or 대문자)
//3. 최소 하나 이상의 숫자
//4. 최소 하나 이상의 특수문자 (!@#$%^&*?_)
  let pwExp = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_]).{8,16}$/;

  //pwExp.test(userpw.value)
  //test() : 정규식 일치 여부를 Boolean값으로 변환한다-> true, false
  if(!pwExp.test(userpw.value)) {
    pwWarn.innerHTML = `<span class="txt-red">8~16자 영문 대소문자,숫자</span>`;
  } else {
    pwVeri = true;
    pwWarn.innerHTML = '';
  }
  })
//비밀번호 재확인
//userpw.value 값과 userPwChk.value 값 비교

let userPwChk = document.getElementById('user-pwchk');
let pwChkWarn = document.querySelector('.pwchk-warn');

userPwChk.addEventListener('focusout', function(){
  if(userpw.value == userPwChk.value) {
    //일치할때 => '';
    pwChkVeri = true;
    pwChkWarn.innerHTML = '';
  } else{
    //일치하지 않을 때 => 비밀번호가 일치하지 않습니다
    pwChkWarn.innerHTML = `<span class="txt-red">비밀번호가 일치하지 않습니다</span>`;
  }
})

for(let  i = 1920; i <=getYear; i++) {
  let option = `<option>${i}</option>`;
  year.insertAdjacentHTML('beforeend', option);

}

for(let i = 1; i <= 12; i++) {
  let option = `<option>${i}</option>`;
  month.insertAdjacentHTML('beforeend', option);
}

for(let i = 1; i <= 31; i++) {
  let option = `<option>${i}</option>`;
  date.insertAdjacentHTML('beforeend', option);
}

//취미(checkbox)
//5개까지만 체크되도록
//alert('최대5개까지만 선택 가능합니다')

let checkBoxs = document.querySelectorAll
('input[type="checkbox"][name="hobby"]');
let maxCount = 5;

checkBoxs.forEach((item) => {
  item.addEventListener('change', () => {
  let checkCount = document.querySelectorAll
  ('input[type="checkbox"][name="hoppy"]:checked').length;
  if(checkCount > maxCount) {
    item.checked = false ;
    alert('최대5개까지만 선택 가능합니다');
  }
  })
})

let submitBtn = document.getElementById('submit-btn');
let joinForm = document.getElementById('join=form');

submitBtn.addEventListener('click', (e) => {
  if(idVeri && pwChkVeri && pwVeri) {
    joinForm.submit();
  } else{
    //기본 속성 제거
    e.preventDefault();
  }

  })