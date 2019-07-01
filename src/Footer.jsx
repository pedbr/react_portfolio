import React from "react"

const Footer = () => {
        return (
            <div className="footer-wrapper">
                <div style={footerStyle} className="footer-content">
                        Made with React .
                </div>
            </div>
        )

}

const footerStyle ={
    fontFamily: 'karla',
    letterSpacing: '-0.10em',
    fontWeight: 'bold',
}

export default Footer