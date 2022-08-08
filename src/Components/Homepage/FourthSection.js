import React from 'react'
import union from '../Images/Union 1.svg'
import thumb from '../Images/pexels-riccardo-bertolo-4245826 (1).jpg'

const FourthSection = () => {
    return (
        <div className='fourth'>
            <h1>Customer's Review</h1>
            <div className='union'>
                <div>
                <img src={union} alt="" />
                    <p className='purpleWrite'>Trading on TradExpress mobile & web platforms has been a smooth experience for me quite easy to navigate.</p>
                    <img className='imgS' src={thumb} alt="" />
                </div>
                <div>
                <img src={union} alt="" />
                    <p className='purpleWrite'>They have the best rate compared to other platforms with fast payout.</p>
                    <img className='imgS' src={thumb} alt="" />
            </div>
            <div>
            <img src={union} alt="" />
                    <p className='purpleWrite'>Easy to fund and withdraw coins or cash on their platform, I will definitely trade with them again.</p>
                    <img className='imgS' src={thumb} alt="" />
            </div>
            </div>
        </div>
    )
}

export default FourthSection