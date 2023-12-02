

let cards =[]
let sum =0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl= document.getElementById("message-el")
//let sumEl = document.getElementById("sum-el")
//another way of grabbing element from the DOM
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")


let player = {
    name: "ali",
    chips: 145
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard(){
     let value = (Math.random() *10) +1 
     
     let randomNumber = Math.floor(value)
     if (randomNumber === 1) {
        return 11
     }
     else if(randomNumber>10){
        return 10
     }
     else{
        return randomNumber
     }
}



function startGame(){
    isAlive=true

    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    
    cards =[firstCard, secondCard]
    sum = firstCard + secondCard
    hasBlackJack = false;
    renderGame()
}

function renderGame(){

    cardsEl.textContent = "Your cards: "

    for (let index = 0; index < cards.length; index++) {
        
        cardsEl.textContent += cards[index] + " "
        
    }
    sumEl.textContent = "Sum: " + sum

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
        
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    
    messageEl.textContent =message
}
    function drawCard(){
        if (isAlive === true && hasBlackJack ===false ) {
            let newCard= getRandomCard()
                sum+= newCard
                cards.push(newCard)       
                renderGame()

        }

    }
