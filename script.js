
function getComputerChoice(){
    let choices=["rock", "paper","scissors"]
    let computerChoice= Math.floor( Math.random()*choices.length)
    console.log(choices[computerChoice])
    return choices[computerChoice]
    
}


let result=document.getElementById("result")
let playerScore=document.getElementById('score-player')
let computerScore=document.getElementById('score-computer')

console.log(typeof computerScore);
playerWins=0;
computerWins=0;


  const playerSelect=document.querySelectorAll(".select");
  playerSelect.forEach(elem =>{
  elem.addEventListener("click",()=>{
    playRound(elem.getAttribute("data-test"),getComputerChoice())
    console.log(elem.getAttribute("data-test"))
  })
  })


function playRound(playerSelect,computerSelect){
  if(playerSelect==computerSelect){
    result.innerHTML= "This is a tie game"
   }
   else if(playerSelect=="rock" && computerSelect=="paper" 
   || playerSelect=="paper" &&computerSelect=="scissors"
   ||playerSelect=="scissors" && computerSelect=="rock"){
    
   renderResult(false)
    }

    else  {
    renderResult(true)
    }
   }

function renderResult(winner){
  if(winner){
    result.innerHTML=  "You won!"
  playerScore.innerText=`Score: ${++playerWins} pts`
  playerScore.classList.add("score")
  }
  else{
    result.innerHTML="Sorry, you lost the round"
    computerScore.innerText=`score: ${++computerWins} pts`;
    computerScore.classList.add('score');
  }
}