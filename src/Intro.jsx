import React from "react"
import { NavLink } from 'react-router-dom';
import '../src/css/intro.css'

const Intro = () => {

    return (
        <div className="body-index">
            <div className="intro-message">
                <div className='centerIntro'>
                    <div>Don't be a stranger !</div>
                    <div className='centerQuestion'>What's your name?</div>
                    <div className=''>
                        <input type='text' className='inputBox' placeholder=''></input>
                        <div><NavLink to='/hello'>GO!</NavLink></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro;