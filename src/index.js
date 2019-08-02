import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from 'react-router-dom'
import Home from "./Home"
import '../src/css/intro.css'

const App = () => {
    return (
        <div className="body-index">
            {/* <div className="intro-message">
                <div className='centerIntro'>
                    <div>Don't be a stranger !</div>
                    <div className='centerQuestion'>What's your name?</div>
                    <div className='cursor'>
                        <input type='text' className='inputBox' placeholder=''></input>
                    </div>
                </div>
            </div> */}
            <Home />
        </div>
        
    )
};

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('app'));