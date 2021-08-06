
const rpsArray = ['rock', 'paper', 'scissor'];
let score = 3;

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
        score = score +1;
        document.querySelector('#counter').textContent = score;
        return {'message': 'You Win !', 'color': 'green'};
        
    }else if(outcome === 0){
        score = score -1;
        document.querySelector('#counter').textContent = score;
        return {'message': 'You Lost !', 'color': 'red'};
        
    }else if(outcome === 0.5){
        document.querySelector('#counter').textContent = score;
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

    createEndElement('You Chose', userChoice, rpsSRC, endScreen);
    
    createEndElement('Bot Chose', botChoice, rpsSRC, endScreen);

    //end result as in you win / lose & reset BTN 

    let lastDiv = document.createElement('div');
    lastDiv.style.marginTop = '40px';



    let endResult = document.createElement('h2');
    endResult.textContent = finalMessage.message;
    endResult.style.color = finalMessage.color;
    endResult.style.textAlign = 'center';

    lastDiv.appendChild(endResult);




    let resetBtn = document.createElement('button');
    resetBtn.setAttribute('class', 'btn-lg btn-light');
    resetBtn.setAttribute('onclick', 'resetGame();');
    resetBtn.textContent = 'Reset Game';

    lastDiv.appendChild(resetBtn);
    endScreen.appendChild(lastDiv);


    document.querySelector('.gameboard').appendChild(endScreen);

}

function resetGame(){

    document.querySelector('.endScreen').remove();
    document.querySelector('.rps-items-container').style.display = 'flex';

}


function rules(){

    const showRules = document.createElement('div');
    showRules.setAttribute('class', 'rulesDiv');
    showRules.style.zIndex = '3';
    const rulesH2 = document.createElement('h2');
    rulesH2.textContent = 'RULES';
    rulesH2.style.color = '#15193C';

    const rulesImg = document.createElement('img');
    rulesImg.src = 'images/image-rules.svg';

    const closeBtn = document.createElement('button');
    closeBtn.setAttribute('class', 'btn-close');
    closeBtn.setAttribute('onclick', 'closeRules();');


    showRules.appendChild(rulesH2);
    showRules.appendChild(rulesImg);
    showRules.appendChild(closeBtn);
    document.querySelector('.container').appendChild(showRules);
}

function closeRules(){

    const rulesDiv = document.querySelector('.rulesDiv');
    rulesDiv.remove();


}


function createEndElement (h4Text, choice, rpsSRC, endScreen){

    const yourParent = document.createElement('div');
    const head = document.createElement('h4');
    head.textContent = h4Text;
    yourParent.appendChild(head);

    const ParentEndScreen = document.createElement('div');
    ParentEndScreen.setAttribute('class', 'rps-outerCircle');
    ParentEndScreen.setAttribute('id', choice);
    const endScreenChild = document.createElement('div');
    endScreenChild.setAttribute('class', 'rpsContainer');

    const rpsImg = document.createElement('img');
    rpsImg.setAttribute('src', rpsSRC[choice]);

    endScreenChild.appendChild(rpsImg);
    ParentEndScreen.appendChild(endScreenChild);
    yourParent.appendChild(ParentEndScreen);
    endScreen.appendChild(yourParent);

}
