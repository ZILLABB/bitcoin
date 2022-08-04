import React from 'react'
import apple from './Images/Icon awesome-apple-1.svg'
import google from './Images/Group 53.svg'
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
                <button className="buttonG">Get Started</button>
                <div className="space"></div>
                <div className="appButton1">
                    <button className='button1'>
                        <img src={apple} alt="" />
                        <p>download on the <br /><span className='span'>App Store</span>
                        </p>
                    </button>
                    <button className='button2'>
                        <img src={google} alt="" />
                        <p>Get on <br /><span className='span'>Google Play</span> </p>
                    </button>
                </div>
            </div>
        </div>

    )
}

export default ThirdSection