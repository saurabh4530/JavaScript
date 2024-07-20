
let msg=document.querySelector(".message")
let num=document.querySelector(".number")
let ges=document.querySelector(".guess")
let check=document.querySelector(".check")
let again=document.querySelector(".again")

let highScr=document.querySelector(".highscore")
let scr=document.querySelector(".score")
let body=document.querySelector("body")

let score=20;
let highscore=0;
let message="";
let guess;
let number=Math.trunc(Math.random()*20+1)

num.textContent="1-20";
msg.textContent="Guess the number....!"


 again.addEventListener("click",refresh)

check.addEventListener("click",logic)


function logic() {
    guess=Number(ges.value);
    console.log(guess);
    console.log(number);

    if (score>=1) {
        if (!guess) {
           msg.textContent="plz enter the number" 
        } else 
        if(guess===number){
            message="correct , you are the Winner.....!";
            highscore=score>highscore?score:highscore;
            body.style.backgroundColor="#33aa33"
            highScr.textContent=highscore;
            scr.textContent=score;
            msg.textContent=message;
        }else if(guess!==number){
            message=guess>number?"value is high":"value is low";
            score--;
            msg.textContent=message;
            scr.textContent=score;
            
            
        }
    }
    else{
        msg.textContent="You lost the game....!";
        scr.textContent=0;
    }
        
   
    
    
}

function refresh() {
number=Math.trunc(Math.random()*20+1);
score=20;
num.textContent="1-20";
msg.textContent="Guess number";
body.style.backgroundColor="#A7D3CF";
ges.value="";
scr.textContent = score;
    
}