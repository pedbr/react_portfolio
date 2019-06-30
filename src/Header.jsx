import React  from "react"
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
        return (
            <nav className="header">
                <ul className="list-reset flex hover:bg-black">
                    <li className="mr-6 hover:bg-yellow"><NavLink style={headerHome} activeStyle={{fontWeight: "bold"}} to='/'>home .</NavLink></li>
                    <li className="mr-6 hover:bg-yellow"><NavLink style={headerProjects} activeStyle={{fontWeight: "bold"}} to='/projects'>projects .</NavLink></li>
                    <li className="mr-6 hover:bg-yellow"><NavLink style={headerWork} activeStyle={{fontWeight: "bold"}} to='/work'>work .</NavLink></li>
                    <li className="mr-6 hover:bg-yellow"><NavLink style={headerAbout} activeStyle={{fontWeight: "bold"}} to='/about'>about .</NavLink></li>
                </ul>
            </nav>
        )   
}

const headerHome = {
    // position: 'absolute',
    // width: '56px',
    // height: '28px',
    // top: '35px',
    fontFamily: 'Karla',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '20px',
    lineHeight: '114.9%',
    letterSpacing: '-0.10em',
    textDecoration: 'none',
    color: '#000000',
    }

const headerProjects = {
    // position: 'absolute',
    // width: '75px',
    // height: '28px',
    // top: '35px',
    fontFamily: 'Karla',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '20px',
    lineHeight: '114.9%',
    letterSpacing: '-0.10em',
    textDecoration: 'none',
    color: '#000000',
    }

const headerWork = {
    // position: 'absolute',
    // width: '75px',
    // height: '28px',
    // top: '35px',
    fontFamily: 'Karla',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '20px',
    lineHeight: '114.9%',
    letterSpacing: '-0.10em',
    textDecoration: 'none',
    color: '#000000',
    }

const headerAbout = {
    // position: 'absolute',
    // width: '75px',
    // height: '28px',
    // top: '35px',
    fontFamily: 'Karla',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '20px',
    lineHeight: '114.9%',
    letterSpacing: '-0.10em',
    textDecoration: 'none',
    color: '#000000',
    }

export default Header