function getUserChoice(userInput){
    userInput= userInput.toLowerCase();
    if(userInput ==='rock' || userInput ==='paper'|| userInput ==='scissor' )
        console.log(`user choice = ${userInput}`);
        return userInput;
}
//getUserChoice('Paper');

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()*3);
    switch(randomNumber){
        case 0:
            console.log('computer choice: rock');
            return 'rock';
            
        case 1:
            console.log('computer choice: paper');
            return 'paper';
            
        case 2:
            console.log('computer choice: scissor');
            return 'scissor';
            
        default:
            break;
    }
    
}
function getWinner(userChoice,computerChoice){
    if(userChoice===computerChoice){
        return 'Match tied';
    }
    else if(userChoice='rock'){
        if(computerChoice==='paper'){
            return 'Computer Won';
        }
        else{
            return 'You won';
        }
    }
    else if(userChoice='paper'){
        if(computerChoice==='scissor'){
            return 'Computer Won';
        }
        else{
            return 'You won';
        }
    }
    else if(userChoice='scissor'){
        if(computerChoice==='rock'){
            return 'Computer Won';
        }
        else{
            return 'You won';
        }
    }
}

console.log(getWinner(getUserChoice('rock'), getComputerChoice()));



