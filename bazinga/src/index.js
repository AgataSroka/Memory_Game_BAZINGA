import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';

ReactDOM.render(<App/>, document.getElementById('root'));


const cardView = ['red', 'red', 'yellow', 'yellow', 'yellowgreen', 'yellowgreen', 'blue', 'blue', 'pink', 'pink',
    'violet', 'violet', 'orange', 'orange', 'darkviolet', 'darkviolet', 'grey', 'grey', 'turquoise', 'turquoise'];

let cards = [...document.querySelectorAll('.cards > div')];

console.log(cards);

const startTime = new Date().getTime();

let activeCard = '';
const activeCards = [];

const gameLength = cards.length / 2;
let gameResult = 0;

const clickCard = function () {
    activeCard = this;
    if (activeCard === activeCards[0])
        return;
    activeCard.classList.remove('hidden');

    if (activeCards.length === 0) {
        console.log('first card');
        activeCards[0] = activeCard;

    } else {
        console.log('second card');
        cards.forEach(card => card.removeEventListener('click', clickCard));
        activeCards[1] = activeCard;

        setTimeout(function () {
            if (activeCards[0].className === activeCards[1].className) {
                console.log('winner');
                activeCards.forEach(card => card.classList.add('off'));
                gameResult++;
                cards = cards.filter(card => !card.classList.contains('off'));
                if (gameResult === gameLength) {
                    const endTime = new Date().getTime();
                    const gameTime = (endTime - startTime) / 1000;
                    alert(`Congratulations! Your time: ${gameTime} seconds `)
                }
            } else {
                console.log('loser');
                activeCards.forEach(card => card.classList.add('hidden'))
            }
            activeCard = '';
            activeCards.length = 0;
            cards.forEach(card => card.addEventListener('click', clickCard))
        }, 1000)
    }
};

const start = function () {
    cards.forEach(card => {
        const position = Math.floor(Math.random() * cardView.length);
        card.classList.add(cardView[position]);
        cardView.splice(position, 1)
    });

    setTimeout(function () {
        cards.forEach(card => {
            card.classList.add('hidden');
            card.addEventListener('click', clickCard)
        })

    }, 3000)

};
start()