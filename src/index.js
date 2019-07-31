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
                    <p>Hi,</p>
                    <p>I'm</p>
                    <p>Pedro .</p>
                </div>
            </div>
        </div>
        // <Home />
    )
};

const centerDiv = {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'karla',
    fontWeight: 'bold',
    fontSize: '144px',
    lineHeight: '122px',
    letterSpacing: '-0.10em',
    color: '#000000',
    
}

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('app'));