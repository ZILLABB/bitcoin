import React from 'react'
import mailing from './Images/mailing.svg'

const ConfirmationPage = () => {

    const email = localStorage.getItem('email')
    const userName=localStorage.getItem('userName')
    
    

    return (
        <div className='confirmation'>
            <h1>You're Almost In!</h1>
            <h1>Welcome {userName}</h1>
            <img src={mailing} alt="" />
            <p className='confirm'>An activation link has been sent to <span className='terms'> {email} </span>Please click on the link to verify your email and activate your TradExpress account.</p>
            <button className='secButton'>Continue</button>
            <p className='confirm'>Didn't get an email? Kindly click <span className='terms'> resend email</span> Wrong email supplied? <span className='terms'>Edit email address</span> </p>
        </div>
    )
}

export default ConfirmationPage