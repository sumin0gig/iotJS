// 변수 설정
let shortsLeft= 3;
// html요소 선택
let shortleftElem = document.querySelector("#short-left");
let comSocreElem = document.querySelector("#computer-score");
let userSocreElem = document.querySelector("#user-score");
let textElem = document.querySelector("#text");
let comBtn = document.querySelector(".btn-computer");
let userBtns = document.querySelectorAll(".btn-user");
shortleftElem.innerHTML = shortsLeft;

// Object 만들기
let computer={
  score: 0,
  percent2: .5,
  percent3: .3,
}
let user={
  score: 0,
  percent2: .5,
  percent3: .3,
}
let game={
  isComputerTurn: true,
  shortsLeft: 5,
}

// computer 먼저 shoot을 한다.
// shoot하면 2점 shoot인지 3점 shoot인지 random으로 결정
// 2점 shoot이면 .5 / 3점 shoot이면 .3 의 확률로 성공한다.
function onComputerShoot(){
  let shootType= Math.random()>.5? 2: 3;
  if(Math.random()< computer[`percent`+shootType]){
    //computer의 percent2 또는 percent3을 값을 불러와서 Math.random()과의 크기를 비교했다.
      computer.score+= shootType;
      comSocreElem.innerHTML = computer.score;
      textElem.innerHTML = `컴퓨터가 ${shootType}점슛을 성공시켰습니다.`;
  }else {
    textElem.innerHTML = `컴퓨터가 ${shootType}점슛을 실패했습니다.`;
  }
  disabledBtn(false);
}

// false 사용자 버튼 활성화 true 컴퓨터 버튼 활성화
function disabledBtn(flag){
  // userBtns는 유사배열이다. 이 유사배열의 값을 forEach로 받아와서 disabled를 flag매개변수에서 값을 받아와 전부 변경시킨것!  // 2개 이상에게 같은 값을 지정할 때 정말 좋을듯!!!
  userBtns.forEach(btn=>{
    btn.disabled = flag;
  })
  comBtn.disabled = !flag;
}

// user가 2점 shoot을 click 했을때 
function onUserShoot(num){
  if(Math.random()<user[`percent`+num]){
    user.score+= num;
    userSocreElem.innerHTML = user.score;
    textElem.innerHTML = "당신이 "+num+"점슛을 성공시켰습니다."
  }else {
    textElem.innerHTML = "당신이 "+num+"점슛을 실패했습니다."
  }
  disabledBtn(true);
  --shortsLeft;
  shortleftElem.innerHTML = shortsLeft;
  if(shortsLeft==0){
    gameOver();
  }
}


// 슛 횟수가 0이면 승자를 결정
function gameOver(){
  if(user.score>computer.score){
    textElem.innerHTML= "승리했습니다."
  }else if(user.score==computer.score){
    textElem.innerHTML= "비겼습니다."
  }else {
    textElem.innerHTML= "졌습니다."
  }
  userBtns.forEach(btn=>btn.disabled = true);
  comBtn.disabled = true;
}