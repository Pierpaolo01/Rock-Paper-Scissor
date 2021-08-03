
const rpsArray = ['rock', 'paper', 'scissor'];

function rpsGame(userChoice){

    let botChoice = rpsArray[Math.floor(Math.random()*3)];

    let winnerResult = decideWinner(userChoice.id, botChoice);
    
    let finalMessage = endMessage(winnerResult);

    showResult(finalMessage, userChoice.id, botChoice);
    
}

function decideWinner(userChoice, botChoice){

    let rpsOutcomes = {
        'rock': {'rock': 0.5, 'paper': 0, 'scissor': 1},
        'paper': {'rock': 1, 'paper': 0.5, 'scissor': 0},
        'scissor': {'rock': 0, 'paper': 1, 'scissor': 0.5}
    }

    let outcome = rpsOutcomes[userChoice][botChoice];
    return outcome;

}

function endMessage(outcome){

    if(outcome === 1){
    
        return {'message': 'You Win !', 'color': 'green'};

    }else if(outcome === 0){
        return {'message': 'You Lost !', 'color': 'red'};

    }else if(outcome === 0.5){
        return {'message': 'You Drew !', 'color': 'orange'};
        
    }

}

function showResult(finalMessage, userChoice, botChoice){

    document.querySelector('.rps-items-container').style.display = 'none';

    let rpsSRC = {
        'rock': 'images/icon-rock.svg',
        'paper': 'images/icon-paper.svg',
        'scissor': 'images/icon-scissors.svg',
    }

    let endScreen = document.createElement('div');
    endScreen.setAttribute('class', 'endScreen rps-items-container');

    let yourParent = document.createElement('div');
    let yours = document.createElement('h4');
    yours.textContent = 'You Chose';
    yourParent.appendChild(yours);

    let yourEndScreen = document.createElement('div');
    yourEndScreen.setAttribute('class', 'rps-outerCircle');
    yourEndScreen.setAttribute('id', userChoice);
    let yourEndScreenChild = document.createElement('div');
    yourEndScreenChild.setAttribute('class', 'rpsContainer');


    let rpsImg = document.createElement('img');
    rpsImg.setAttribute('src', rpsSRC[userChoice]);

    yourEndScreenChild.appendChild(rpsImg);
    yourEndScreen.appendChild(yourEndScreenChild);
    yourParent.appendChild(yourEndScreen);
    endScreen.appendChild(yourParent);


    let botParent = document.createElement('div');
    let house = document.createElement('h4');
    house.textContent = 'House Chose';
    botParent.appendChild(house);

    let botEndScreen = document.createElement('div');
    botEndScreen.setAttribute('class', 'rps-outerCircle');
    botEndScreen.setAttribute('id', botChoice);
    let botEndScreenChild = document.createElement('div');
    botEndScreenChild.setAttribute('class', 'rpsContainer');


    let botRpsImg = document.createElement('img');
    botRpsImg.setAttribute('src', rpsSRC[botChoice]);

    botEndScreenChild.appendChild(botRpsImg);
    
    botEndScreen.appendChild(botEndScreenChild);
    botParent.appendChild(botEndScreen);
    endScreen.appendChild(botParent);

    //end result as in you win / lose & reset BTN 

    let lastDiv = document.createElement('div');
    lastDiv.style.marginTop = '25px';



    let endResult = document.createElement('h2');
    endResult.textContent = finalMessage.message;
    endResult.style.color = finalMessage.color;

    lastDiv.appendChild(endResult);




    let resetBtn = document.createElement('button');
    resetBtn.setAttribute('class', 'btn btn-warning');
    resetBtn.setAttribute('onclick', 'resetGame();');
    resetBtn.textContent = 'Reset Game';

    lastDiv.appendChild(resetBtn);
    endScreen.appendChild(lastDiv);


    document.querySelector('.gameboard').appendChild(endScreen);

}