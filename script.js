
const startBtn = document.querySelector('.start-btn');
const restartBtn = document.querySelector('.restart-btn');
const question = document.querySelector('.question');
const answerBtnContainer = document.querySelector('.answerBtnContainer');
const result = document.querySelector('.result');
const userAnswer = document.querySelector('.user-answer');
const correctAnswer = document.querySelector('.correct-answer');

const colorArray = ['pink','red','orange','gold','green','blue', 'purple','brown','gray','black'];

let length;
let randomColor = [];
let showRandomColor;
let loop = 0;
let userAnswerArray = [];

window.onload = build;

function build(){

    length = 4;
    let html = '';

    for(let i=0; i < colorArray.length;i++){
    html += '<button class="' + colorArray[i] +'" style="background-color:'+colorArray[i]+ ';" onclick = "userPick()" >' + colorArray[i] + '</button>';
    }
    answerBtnContainer.innerHTML = '<p>Press color buttons in order!</p>' + '<div class="color-btns">'+html+ '</div>';
}

function selectDifficulty(){
    if(event.currentTarget.value == 4){
        length = 4;
    }else if(event.currentTarget.value == 6){
        length = 6;
    }else if(event.currentTarget.value == 8){
        length = 8;
    }else if(event.currentTarget.value == 10){
        length = 10;
    }

};

startBtn.addEventListener('click', startGame);
restartBtn.addEventListener('click', resetGame);

function startGame(){
    startBtn.disabled = true;
    answerBtnContainer.classList.add('hide');

    for(let i = 0; i < length; i++){
      let r = colorArray[Math.floor(Math.random()*length)];
        randomColor.push(r);
    }

    // console.log(randomColor);
    showRandomColor = setTimeout(showWhite,200);

};

function showWhite(){
    question.style.backgroundColor = 'white';
    showRandomColor = setTimeout(showColor,200);
}

function showColor(){
    question.style.backgroundColor = randomColor[loop];
    loop++;

    if(loop >= randomColor.length){
        clearTimeout(showRandomColor);
        answerBtnContainer.classList.remove('hide');
    }
    showRandomColor = setTimeout(showWhite,1000);
}

function userPick(){
    event.preventDefault();

    a = event.target.className;
    userAnswerArray.push(a);

    userAnswer.innerHTML += '<div class="' + a +'" style="background-color:'+ a + ';">' + a + '</div>';

    console.log(userAnswerArray);
    if(userAnswerArray.length == randomColor.length){
        displayResult();
    }
}

function displayResult(){
    if(userAnswerArray.toString()== randomColor.toString()){
        result.innerHTML = '<img src="images/check64.png" alt="correct sign">';
    }  else{
        result.innerHTML = '<img src="images/close64.png" alt="wrong sign">';
    } 
    showCorrectAnswer();
}

function showCorrectAnswer(){
    let html = '';
    
    for(let i=0; i < randomColor.length;i++){
    html += '<div style="background-color:'+randomColor[i]+ ';">' + randomColor[i] + '</div>';
    }
    correctAnswer.innerHTML = html;
}

function resetGame(){
    document.location.reload();
}
