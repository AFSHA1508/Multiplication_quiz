const num1 = Math.ceil(Math.random()*10);
// console.log(num1);
const num2 = Math.ceil(Math.random()*10);

const question = document.getElementById("question");

const formEl = document.getElementById("form");

const input = document.getElementById("input");

const scoreEl = document.getElementById("score");

let score = JSON.parse(localStorage.getItem("score"));

if(!score){
    score = 0;
}

scoreEl.innerHTML = `Score : ${score}`;

question.innerHTML= `What is ${num1} multiply ${num2}?`;

const ans = num1 * num2;

formEl.addEventListener("submit",()=>{
    const userans = +input.value;
// console.log(userans,typeof userans);
if(userans === ans){
    score++;
    // console.log("correct");
    updateScore();
}
else{
    score--;
    // console.log("incorrect");
    updateScore();
}
});

function updateScore(){
    localStorage.setItem("score",JSON.stringify(score));
}