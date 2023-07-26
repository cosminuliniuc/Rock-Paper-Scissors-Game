$(document).ready(function(){
    function computerChoice(){
        let choices=["rock","paper","scissors"];
      
        return choices[Math.floor(Math.random()* choices.length)]
    }
    
    let playerScore=0;
    let computerScore=0;
   
    $('.select').click(function(){
    if(playerScore==0 && computerScore===0){
        $('#player-computer').text("")
        $('#score-computer').text("")

    }
        let playerSelect;
        let computerSelect=computerChoice();
        playerSelect=$(this).attr('data-test');
      
     if(playerSelect==="rock" && computerSelect==="scissors" ||
        playerSelect==="paper" && computerSelect==="rock" ||
        playerSelect==="scissors" && computerSelect==="paper"){
         ++playerScore;
         $('#result').text("Player wins the round!")
         $('#score-player').text(`Score: ${playerScore}`)
        
        }
    else if(playerSelect=== computerSelect){
        $('#result').text("This round is tie!")
    }
    else{
        ++computerScore;
        $("#result").text("Computer wins the round!")
        $('#score-computer').text(`Score: ${computerScore}`)
    }
    if(playerScore===5 ||computerScore===5){
        playerScore=0;
        computerScore=0;
        $("#result").text("The game is over!");
   
       
    }
    })
   
})
