import React from "react"

const Hello = () => {
        return (
            <div style={centerDiv}>
            <p className="content-text">Hi,</p>
            <p className="content-text">I am</p>
            <p className="content-text">Pedro .</p>
            </div>
        )
}

const centerDiv = {
    
    fontFamily: 'karla',
    fontWeight: 'bold',
    fontSize: '144px',
    lineHeight: '122px',
    letterSpacing: '-0.10em',
    color: '#000000',
    
}

export default Hello