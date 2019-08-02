import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from 'react-router-dom'
import Home from "./Home"
import '../src/css/intro.css'

const App = () => {

    return (
        <div className="body-index">
            <Home />
        </div>
    )
};

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('app'));