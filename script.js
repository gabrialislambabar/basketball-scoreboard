





const homeScoreBoard = document.getElementById("score-home")
let homeScore = 0;


function hs1(){
  homeScore += 1;
  homeScoreBoard.textContent = homeScore
    checkWinner()

}

function hs2(){
  homeScore += 2;
  homeScoreBoard.textContent = homeScore
    checkWinner()

}

function hs3(){
  homeScore += 3;
  homeScoreBoard.textContent = homeScore
    checkWinner()

}

const guestScoreBoard = document.getElementById("score-guest")
let guestScore = 0;


function gs1(){
  guestScore += 1;
  guestScoreBoard.textContent = guestScore
    checkWinner()

}


function gs2(){
  guestScore += 2;
  guestScoreBoard.textContent = guestScore
    checkWinner()

}
function gs3(){
  guestScore += 3;
  guestScoreBoard.textContent = guestScore
  checkWinner()
}

const winners = document.getElementById("winner")

function checkWinner() {
  if(homeScore === guestScore) {
    winners.innerHTML = "Home team is in the lead";
  } else if(homeScore > guestScore) {
    winners.innerHTML = "Home team is in the lead."
  }else {
    winners.innerHTML = "Guest team is in the lead";
  }
}
console.log(winners)
