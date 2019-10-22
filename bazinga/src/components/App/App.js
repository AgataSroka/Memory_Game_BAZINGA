import React, {Component} from 'react';
import '../../styles/App.scss';


class App extends Component {
    render() {
        return (

            <div className="App">
                <h1> Bazinga </h1>
                <div className='container'>
                    <div className='settings'>
                        <div> Czas: <span> 100 </span></div>
                        <div> Ilość odsłon: <span> 0 </span></div>
                    </div>
                </div>
            </div>
        )
            ;
    }
}

export default App;
