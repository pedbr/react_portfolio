import React from "react"
import Hello from "./Hello"
import Header from "./Header"
import Work from "./Work"
import Projects from "./Projects"
import About from "./About"
import '../src/css/intro.css'
import { Switch, Route } from 'react-router-dom'

const Home = () => {
    return (
        <div className="page-wrapper">
            <div className="page-content">
                <Header />
                <div className="content-wrapper">
                    <Switch>
                        <Route exact path='/' component={Hello}></Route>
                        <Route exact path='/about' component={About}></Route>
                        <Route exact path='/projects' component={Projects}></Route>
                        <Route exact path='/work' component={Work}></Route>
                    </Switch>
                </div>
                
            </div >
        </div >
    )
};

export default Home;