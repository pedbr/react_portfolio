import React from "react"
import { NavLink, Link } from 'react-router-dom';
import '../src/css/intro.css'

const Intro = () => {

    window.onload = function(){ 

    const inpKey = "Name";
    const inpValue = document.getElementById("inpValue");
    const submitBtn = document.getElementById("submit-button");

    inpValue.addEventListener("keyup", function(event){
        if (event.keyCode === 13){
            event.preventDefault();
            document.getElementById("submit-button").click();
        }

    })

    submitBtn.onclick = function () {
        const key = inpKey;
        const value = inpValue.value;

        if (value) {
            localStorage.setItem(key, value);
            window.open('/hello', "_self");
        } else {
            window.alert("Enter you name bitch!");
        }
    }

    }


    return (
        <div className="body-index">
            <div className="intro-message">
                <div className='centerIntro'>
                    <div>Don't be a stranger !</div>
                    <div className='centerQuestion'>What's your name?</div>
                    <div className='name-submit'>
                        <input type='text' className='inputBox' id="inpValue" autoComplete="off" placeholder=''></input>
                        <div id="submit-button">GO!</div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Intro;