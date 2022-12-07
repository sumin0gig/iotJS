// 변수 설정
let comScore= 0;
let userScore= 0;
let shortsLeft= 3;
let isComputerTurn = true;
// html요소 선택
let shortleftElem = document.querySelector("#short-left");
let comSocreElem = document.querySelector("#computer-score");
let userSocreElem = document.querySelector("#user-score");
let textElem = document.querySelector("#text");
let comBtn = document.querySelector(".btn-computer");
let userBtns = document.querySelectorAll(".btn-user");
shortleftElem.innerHTML = shortsLeft;


// computer 먼저 shoot을 한다.
// shoot하면 2점 shoot인지 3점 shoot인지 random으로 결정
// 2점 shoot이면 .5 / 3점 shoot이면 .3 의 확률로 성공한다.
function onComputerShoot(){
  let shootType= Math.random()>.5? 2: 3;
  if(shootType==2){
    if(Math.random()<.5){
      comScore+= 2;
      comSocreElem.innerHTML = comScore;
      textElem.innerHTML = "컴퓨터가 2점슛을 성공시켰습니다."
    }else {
      textElem.innerHTML = "컴퓨터가 2점슛을 실패했습니다."
    }
  }else{
    if(Math.random()<.3){
      comScore+= 3;
      comSocreElem.innerHTML = comScore;
      textElem.innerHTML = "컴퓨터가 3점슛을 성공시켰습니다."
    }else {
      textElem.innerHTML = "컴퓨터가 3점슛을 실패했습니다."
    }
  }
  isComputerTurn= false;
  // userBtns는 유사배열이다. 이 유사배열의 값을 forEach로 받아와서 disabled를 false로 전부 변경시킨것!
  userBtns.forEach(btn=>{
    btn.disabled = false;
  })
  // 2개 이상에게 같은 값을 지정할 때 정말 좋을듯!!!
  comBtn.disabled = true;
}

// 

// user가 2점 shoot을 click 했을때 
function onUserShoot2(){
  if(Math.random()<.5){
    userScore+= 2;
    userSocreElem.innerHTML = userScore;
    textElem.innerHTML = "당신이 2점슛을 성공시켰습니다."
  }else {
    textElem.innerHTML = "당신이 2점슛을 실패했습니다."
  }
  isComputerTurn= true;
  userBtns.forEach(btn=>{
    btn.disabled = true;
  })
  comBtn.disabled = false;
  --shortsLeft;
  shortleftElem.innerHTML = shortsLeft;
  if(shortsLeft==0){
    gameOver();
  }
}

// 3점 shoot
function onUserShoot3(){
  if(Math.random()<.3){
    userScore+= 3;
    userSocreElem.innerHTML = userScore;
    textElem.innerHTML = "당신이 3점슛을 성공시켰습니다."
  }else {
    textElem.innerHTML = "당신이 3점슛을 실패했습니다."
  }
  isComputerTurn= true;
  userBtns.forEach(btn=>btn.disabled = true);
  comBtn.disabled = false;
  --shortsLeft;
  shortleftElem.innerHTML = shortsLeft;
  if(shortsLeft==0){
    gameOver();
  }
}

// 슛 횟수가 0이면 승자를 결정
function gameOver(){
  if(userScore>comScore){
    textElem.innerHTML= "승리했습니다."
  }else if(userScore==comScore){
    textElem.innerHTML= "비겼습니다."
  }else {
    textElem.innerHTML= "졌습니다."
  }
  isComputerTurn= true;
  userBtns.forEach(btn=>btn.disabled = true);
  comBtn.disabled = true;
}