import React from "react"
import '../src/css/hello.css'

const Hello = () => {
        return (
            <div className="center-div">
                <div className= "greeting">
                    <div>Hey John!</div>
                    <div>I'm Pedro.</div>
                </div>
                <div className="center-bar"></div>
                <div style={bottomDiv}>
                    <p>Junior Developer .</p>
                    <p>Creative Designer .</p>
                </div>
            </div>
        )
}

const bottomDiv = {
    marginLeft: '40.5%',
    marginTop: '1%',
    textAlign: 'left',
    fontFamily: 'karla',
    fontWeight: 'bold',
    fontSize: '24px',
    lineHeight: '114.9%',
    letterSpacing: '-0.10em',
    color: '#000000',
    
}

export default Hello