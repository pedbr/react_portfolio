import React from "react"
import '../src/css/hello.css'

const Hello = () => {

        return (
            <div className="center-div">
                <div className= "greeting">
                    <div>Hey {localStorage.getItem('Name').charAt(0).toUpperCase() + localStorage.getItem('Name').slice(1).toLowerCase()}!</div>
                    <div>I'm Pedro .</div>
                </div>
                <div className="center-bar"></div>
                <div className="bottom-div">
                    <p>Junior Developer .</p>
                    <p>Creative Designer .</p>
                </div>
            </div>
        )
}

export default Hello