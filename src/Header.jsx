import React  from "react"
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
        return (
            <nav className="header">
                <h1 className="header-title">
                    <Link className="text-pedro-yellow hover:text-pedro-yellow no-underline" to='/'>My Portfolio</Link>
                </h1>
                <ul className="list-reset flex">
                    <li className="mr-6"><NavLink style={headerHome} activeStyle={{fontWeight: "bold"}} to='/'>home .</NavLink></li>
                    <li className="mr-6"><NavLink style={headerProjects} activeStyle={{fontWeight: "bold"}} to='/projects'>projects .</NavLink></li>
                    <li className="mr-6"><NavLink style={headerWork} activeStyle={{fontWeight: "bold"}} to='/projects'>work .</NavLink></li>
                    <li className="mr-6"><NavLink style={headerAbout} activeStyle={{fontWeight: "bold"}} to='/about'>about .</NavLink></li>
                </ul>
            </nav>
        )   
}

const headerHome = {
    // position: 'absolute',
    // width: '56px',
    // height: '28px',
    top: '35px',
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