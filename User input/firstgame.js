// first interactive game
let playGame = confirm("shall we play rock,paper or scissors?");
if (playGame) {
  // play
  let playerChoice = prompt("Please enter rock,paper or scissors.");
  if (playerChoice) {
    let playerOne = playerChoice.trim().toLowerCase();
    if (
      playerOne === "rock" ||
      playerOne === "paper" ||
      playerOne === "scissors"
    ) 
    {
        let ComputerChoice=Math.floor(Math.random()*3 +1)
        let computer =ComputerChoice===1 ? "rock" :ComputerChoice===2 ? "paper" : "scisssors";

        let result=playerOne===computer ? " Tie Game" : playerOne==="rock" && computer==="paper" ?`playerone:${playerOne}\nComputer: ${computer} \nComputer Wins`:playerOne==="paper" && computer==="scissors" ? `playerone:${playerOne}\nComputer: ${computer} \nComputer Wins`: playerOne==="scissors" && computer==="rock" ?` playerone:${playerOne}\nComputer: ${computer} \nComputer Wins` : `playerone:${playerOne}\nComputer: ${computer} \nPlayerone Wins`;

        alert(result);

        let playagain=confirm("play again?")
        playagain ? location.reload() : alert("ok Thanks for Playing ");
        
    } 
    else {
        alert('you did nor enter rock,paper and scissors.')
         }
  } 
  else {
    alert("i guess you changed your mind may be next time.");
       }
} 
else {
  alert("ok ,maybe next time");
    }
