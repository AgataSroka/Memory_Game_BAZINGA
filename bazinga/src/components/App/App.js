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
                </div>
            </div>

        )

    }
}

export default App;
