import React  from "react"
import '../src/css/header.css'
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
        return (
            <div className="header-style">
                <div className="header-element"><NavLink to='/about'>about .</NavLink></div>
                <div className="header-element"><NavLink to='/work'>work .</NavLink></div>
                <div className="header-element"><NavLink to='/projects'>projects .</NavLink></div>
                <div className="header-element"><NavLink to='/'>home .</NavLink></div>
            </div>
        )   
}

export default Header