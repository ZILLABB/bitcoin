import React from 'react'
import appStore from "./Images/Group 68.svg";
import googlePlay from "./Images/Group 69.svg";

const ThirdSection = () => {
    return (
        <div>
            <div className='fourthSection'>
                <div>
                    <p>Ready to trade Buy/Sell cryptocurrencies in just 10 minutes?</p>
                    <h2>Create your account for free and start trading today!</h2>
                </div>
                <div>
                </div>
                <button className="buttonF">Get Started</button>
                <div className="space"></div>
                <div className="appButton">
                    <img src={appStore} alt="" />
                    <img src={googlePlay} alt="" />
                </div>
            </div>
        </div>

    )
}

export default ThirdSection