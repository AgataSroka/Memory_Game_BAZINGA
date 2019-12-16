import React, {Component} from 'react';
import '../../styles/GameOver.scss';


class GameOver extends Component {

    render() {
        return (
        <section>
            <div className='game_over_text'>
                <h2> Congratulations! <br/> You are the best! </h2>
                <h3> Time of your game {sessionStorage.getItem("game_time")} </h3>
                <button> Click to run new game! </button>
            </div>
        </section>
        )
    }
}
export default GameOver