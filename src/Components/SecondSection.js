import React from 'react'
import wallet from './Images/Group 52.svg'
import stock from './Images/Group 28.svg'



const SecondSection = () => {
    return (
        <div>
            <div>
                <h1>
                    Why do people get involved with Cryptocurrencies?
                </h1>
                <div className='card1'>
                    <div className='card'><img src="" alt="" /><h1>Easy Mode Of Payment</h1>
                        <p>People can now easily send and receive money from anywhere in the world to purchase goods and pay for services.</p></div>
                    <div className='card'><img src="" alt="" /><h1>Easy Mode Of Payment</h1>
                        <p>Just like the internet no single entity controls the Crypto network which provides users transparency and privacy, which puts you in absolute control of your money.</p></div>
                    <div className='card'><img src="" alt="" /><h1>Easy Mode Of Payment</h1>
                        <p>The constant demand as made Cryptocurrencies a Digital Gold used for alternative store of wealth on long term investments.</p></div>
                </div>
                <div className='learnButton'>
                    <button className='butt'>Learn More</button>
                </div>
                <div>
                    <h1>
                        Buy and Sell your Cryptocurrency in 3 simple steps
                    </h1>


                    <div className='create'>
                        <div className='firstCreate'>
                            <button className='buttonOne'>1</button>
                            <h1>create a free Account</h1>
                            <p>Sign up for your TradExpress wallet on web, iOS, or Andriod devices and follow our easy process to set up your profile.</p>
                        </div>
                        <div>
                            <img src={wallet} alt="" />
                        </div>
                    </div>
                    <div className='secondPart'>
                        <img src={wallet} alt="" />
                        <div className='firstCreate'>
                            <button className='buttonOne'>2</button>
                            <h1>Deposit</h1>
                            <p>Choose your preferred deposit option like bank transfer, credit/debit card or send digital asset directly to your wallet for easy funding/withdrawal.</p>
                        </div>
                    </div>
                    <div>

                    </div>
                    <div className='create'>
                       
                        <div className='firstCreate'>
                            <button className='buttonOne'>3</button>
                            <h1>create a free Account</h1>
                            <p>Sign up for your TradExpress wallet on web, iOS, or Andriod devices and follow our easy process to set up your profile.</p>
                        </div>
                        <div>
                            <img src={stock} alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default SecondSection