let playerChoice = document.getElementById("playerChoice")
let compChoice = document.getElementById("computerChoice")
let res = document.getElementById("result")
let choices = ["Rock","Paper","Scissor"]
function comp(){
    var item = choices[Math.floor(Math.random()*choices.length)];
    console.log(item)
    compChoice.innerHTML = item;
}
function checkWinner(){
    if(playerChoice.innerText == compChoice.innerText)
        res.innerHTML = "It's a Draw";
    else if((playerChoice.innerText=="Rock" &&compChoice.innerText=="Paper") || (playerChoice.innerText=="Paper" &&compChoice.innerText=="Scissor") || (playerChoice.innerText=="Scissor" && compChoice.innerText=="Rock"))
        res.innerHTML = "You Lose :(";
    else
        res.innerHTML = "You Won :)"
}
function rock() {
    comp();
    playerChoice.innerHTML = "Rock";
    checkWinner();
}
function paper() {
    comp();
    playerChoice.innerHTML = "Paper";
    checkWinner();
}
function scissor() {
    comp();
    playerChoice.innerHTML = "Scissor";
    checkWinner();
}
function reset(){
    playerChoice.innerHTML=""
    compChoice.innerHTML=""
    res.innerHTML=""
}