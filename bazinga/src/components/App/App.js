import React, {Component} from 'react';
import '../../styles/App.scss';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1> Bazinga </h1>
                <div className='container'>
                    <div className='settings'>
                        <div className='main_settings'>
                            <div className='main_info'>
                                Previous game time: <span> {sessionStorage.getItem("game_time")}  </span>
                            </div>
                            <div className='main_info'>
                                Flips: <span id='display_count'>  </span>
                            </div>
                        </div>
                        <section className='cards'>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </section>
                    </div>
                    <section>
                        <div style={{display:'none'}} className='game_over_text'>
                            <h2> Congratulations! <br/> You are the best! </h2>
                            <h3> Time of your game {sessionStorage.getItem("game_time")} </h3>
                            <h3> Click to run new game! </h3>
                        </div>
                    </section>
                </div>
            </div>

        )

    }
}

export default App;
