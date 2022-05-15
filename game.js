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
            return 'rock';
            
        case 1:
            return 'paper';
            
        case 2:
            return 'scissor';
            
            
    }
    
}
console.log(getComputerChoice());
