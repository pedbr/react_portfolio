import React from "react"
import ReactDOM from "react-dom"
import './css/tailwind.css'
import { BrowserRouter } from 'react-router-dom'
import Home from "./Home"

const App = () => {
    return (
        <Home />
    )
};

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('app'));