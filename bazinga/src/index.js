import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';

ReactDOM.render(<App/>, document.getElementById('root'));


const cardView = ['red', 'red', 'yellow', 'yellow', 'yellowgreen', 'yellowgreen', 'blue', 'blue', 'pink', 'pink',
    'violet', 'violet', 'orange', 'orange', 'darkviolet', 'darkviolet', 'grey', 'grey', 'turquoise', 'turquoise'];

let cards = [...document.querySelectorAll('.cards > div')];
console.log(cards);
let display = document.getElementById('display_count');
console.log(display);

const startTime = new Date().getTime();
let count = 0;
let activeCard = '';
const activeCards = [];

const gameLength = cards.length / 2;
let gameResult = 0;

const games = document.querySelectorAll('.game_over_text');
console.log(games);


const clickCard = function () {
    activeCard = this;

    if (activeCard === activeCards[0])
        return;
    activeCard.classList.remove('hidden');



    if (activeCards.length === 0) {
        console.log('first card');
        count++;
        activeCards[0] = activeCard;

    } else {
        console.log('second card');
        count++;
        cards.forEach(card => card.removeEventListener('click', clickCard));
        display.innerHTML = count/2;
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
                    alert(`Congratulations! Time of your game: ${gameTime.toFixed(0)} s`);
                    sessionStorage.setItem("game_time",`${gameTime.toFixed(0)}s`);
                        // if (games.style.display === 'none') {
                        //    return games.style.display === 'block'
                        // }
                }
            } else {
                console.log('loser');
                activeCards.forEach(card => card.classList.add('hidden'))
            }
            activeCard = '';
            activeCards.length = 0;
            cards.forEach(card => card.addEventListener('click', clickCard));

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
start();



