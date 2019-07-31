import React from "react"
import ReactDOM from "react-dom"
import './css/tailwind.css'
import { BrowserRouter } from 'react-router-dom'
import Home from "./Home"

const App = () => {
    return (
        <div className="page-wrapper">
            <div>
                <div className= "flex-wrap" style={centerDiv}>
                    <div>Don't be a stranger !</div>
                    <div style={centerQuestion}>What's your name?</div>
                    <div>
                        <input type='text' style={inputBox} placeholder=''></input>
                    </div>
                </div>
            </div>
        </div>
        // <Home />
    )
};

const centerDiv = {
    height: '100vh',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'karla',
    fontWeight: 'bold',
    fontSize: '100px',
    lineHeight: '122px',
    letterSpacing: '-0.10em',
    color: '#000000',
}

const centerQuestion = {
    marginTop: '-50px',
    marginBottom: '-50px',
    fontSize: '60px',
    letterSpacing: '-0.11em',
}

const inputBox = {
    textAlign: 'center',
    fontFamily: 'karla',
    letterSpacing: '-0.11em',
    width: '300px',
    fontSize: '70px',
    background: 'black',
    color: '#ffd600',
    
}

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('app'));