import React,{useState} from 'react'
import wel_img from "./img/image-mockups.png"
import "./Home.css"
import customers from "./img/icon-onboarding.svg";
import transferimg from "./img/icon-budgeting.svg"
import transaction from "./img/icon-online.svg"
 import { Link  } from "react-router-dom";
import CreateAccForm from "./CreateAccForm";
import CharityPage from "./CharityPage"
import transfer from "./Transfer.js";

function Home() {
    

    
    return (
        <>
        <div className="home">

            <div className="wel_text">
                <h1>Next generation </h1>
                <h1>Digital banking</h1>
                <p class="wel_subtext">Take your financial life online. Your Easybank account 
                 will be a one-stop-shop for spending, saving,
                 budgeting, investing, and much more.
                 </p>

                <button className="btn_h">
                <Link to="/CharityPage">
                Donate for a cause
                        </Link>
                </button>

            </div>

            <div className="wel_img">
                <img className="img" src={wel_img}/>
            </div>

        </div>

        <div className="about">

            <div className="about_text">
                <h2>Why choose Easybank?</h2>
                <p>We leverage Open Banking to turn your bank account into your financial hub.<br/>
                Control your finances like never before.</p>
                
            </div>

            <div className="about_items">
                <div className="item_one">
                    <img src={customers} />
                    <h2>Account Holders</h2>
                    <p>Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.</p>
                   
                        <button className="btn">
                        <Link to="/CreateAccForm">
                        Make your Account 
                        </Link>
                        </button>

                </div>

                <div className="item_two">
                    <img src={transferimg} />
                    <h2>Money transfer</h2>
                    <p>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
                    <button className="btn">
                        <Link to="/transfer">
                            Pay here 
                        </Link>
                        </button>
                </div>

                <div className="item_three">
                    <img src={transaction} />
                    <h2>Simple Budgeting</h2>
                    <p>See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.</p>
                    <button className="btn">
                        <Link to="/transcation">
                        Transaction History
                        </Link>
                        </button>
                </div>

            </div>

        </div>

        </>
    )
}

export default Home
