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
                            Czas: <span> 100 </span>
                        </div>
                        <div className='main_info'>
                            Ilość odsłon: <span> 0 </span>
                        </div>
                        </div>
                        <div className='cards'>
                            <div className='card'> </div>
                            <div className='card'> </div>
                            <div className='card'> </div>
                            <div className='card'> </div>
                            <div className='card'> </div>
                            <div className='card'> </div>
                            <div className='card'> </div>
                            <div className='card'> </div>
                            <div className='card'> </div>
                            <div className='card'> </div>
                            <div className='card'> </div>
                            <div className='card'> </div>
                            <div className='card'> </div>
                            <div className='card'> </div>
                            <div className='card'> </div>
                            <div className='card'> </div>
                            <div className='card'> </div>
                            <div className='card'> </div>
                            <div className='card'> </div>
                            <div className='card'> </div>
                        </div>
                    </div>
                </div>
            </div>
        )
            ;
    }
}

export default App;
