import React from 'react'
import Logo from "./img/logo.svg"
import "./Header.css";

function Header() {
    return (
        <nav className="header">
            <img className="header_logo" src={Logo}/>
            
            <div className="header_nav">
                <div className="header_option">
                    <span className="header_optionOne">Home</span>
                </div>

                <div className="header_option">
                    <span className="header_optionTwo">About</span>
                </div>

                <div className="header_option">
                    <span className="header_optionThree">Contact</span>
                </div>

                <div className="header_option">
                    <span className="header_optionFour">Careers</span>
                </div>
            </div>

            <button className="btn" type="submit">Request Invite</button>
        </nav>
    )
}

export default Header
