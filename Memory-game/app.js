const cardArray = [
    { name: 'beer', img: 'images/beer.png' },
    { name: 'ice cream', img: 'images/ice cream.png' },
    { name: 'cookies', img: 'images/cookies.jpg' },
    { name: 'cooldrink', img: 'images/cooldrink.png' },
    { name: 'fries', img: 'images/fries.png' },
    { name: 'nachos', img: 'images/nachos.png' },
    { name: 'beer', img: 'images/beer.png' },
    { name: 'ice cream', img: 'images/ice cream.png' },
    { name: 'cookies', img: 'images/cookies.jpg' },
    { name: 'cooldrink', img: 'images/cooldrink.png' },
    { name: 'fries', img: 'images/fries.png' },
    { name: 'nachos', img: 'images/nachos.png' }
]

cardArray.sort(() => 0.5 - Math.random()); //suffle array

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
        //console.log(card, i)
    }
}

createBoard();

function checkMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    console.log(cards)
    console.log('check for match!')


    if (optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('You have clicked the same image!')
    }
    if (cardChosen[0] == cardChosen[1]) {
        alert('You found a match')
        cards[optionOneId].setAttribute('src', 'images/finish.png')
        cards[optionTwoId].setAttribute('src', 'images/finish.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardChosen)
    }
    else {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('Sorry try again!')

    }
    resultDisplay.textContent = cardsWon.length
    cardChosen = []
    cardsChosenIds = []

    if (cardsWon.length == cardArray.length / 2) {
        resultDisplay.textContent = 'Congratulation you found them all!'
    }
}

//function to flip card
function flipCard() {
    const cardId = this.getAttribute('data-id')
    cardChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    console.log(cardChosen)
    console.log(cardsChosenIds)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardChosen.length === 2) {
        setTimeout(checkMatch, 500)

    }
}
