let userScore = 0
let compScore = 0
const userScore_span = document.getElementById("user_score")
const compScore_span = document.getElementById("comp_score")
const scoreBoard_div = document.querySelector(".score_board")
const result_p = document.querySelector(".result > p")
const rock_div = document.getElementById("rock")
const paper_div = document.getElementById("paper")
const scissor_div = document.getElementById("scissor")


function get_comps() {
    const choices = ["r","p","s"]
    const randonNumber = Math.floor(Math.random() * 3)
    return choices[randonNumber]
}

function game_launch(userChoice) {
    const compChoice = get_comps()
    switch (userChoice + compChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice,compChoice)
            break
        case "rp":
        case "ps":
        case "sr":
            loss(userChoice,compChoice)
            break
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, compChoice)
            break

    }
}

function wordConverter(word) {
    if (word === "r") return "Rock"
    if (word === "p") return "Paper"
    return "Scissors"
}

function win(userChoice,compChoice) {
    userScore++
    userScore_span.innerHTML = userScore
    compScore_span.innerHTML = compScore
    const userWord = "You".fontsize(3).sub()
    const compWord = "comp".fontsize(3).sub()
    result_p.innerHTML = `${wordConverter(userChoice)}${userWord} beats ${wordConverter(compChoice)}${compWord} .You win!`
    /* this code throughs error of userChoice is undefined*/
    //document.getElementById(userChoice).classList.add('green-glow')
    //setTimeout(function() {document.getElementById(userChoice).classList.remove("green-glow")}, 300)
}
function loss(userChoice,compChoice) {
    compScore++
    userScore_span.innerHTML = userScore
    compScore_span.innerHTML = compScore
    const userWord = "user".fontsize(3).sub()
    const compWord = "comp".fontsize(3).sub()
    result_p.innerHTML = `${wordConverter(userChoice)}${userWord} lost to ${wordConverter(compChoice)}${compWord} .You lose!`



}
function draw(userChoice,compChoice) {
    const userWord = "user".fontsize(3).sub()
    const compWord = "comp".fontsize(3).sub()
    result_p.innerHTML = `${wordConverter(userChoice)}${userWord} draws to ${wordConverter(compChoice)}${compWord} .Its a draw!`



}

function main() { 
    rock_div.addEventListener('click', function() {
        game_launch('r');
    });
    paper_div.addEventListener('click', function() {
        game_launch('p')
    })
    scissor_div.addEventListener('click', function() {
        game_launch('s')
    })
}
main()