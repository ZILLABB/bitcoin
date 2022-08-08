import React from 'react'
import { Link } from 'react-router-dom'
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';



const Buy = () => {
    return (
        <div >
            <div className='buyPage'>
                <h1>Buy/Sell Instantly</h1>
                <div className='tuy'>
                    <Link to='/instant-buy'><p className='buyBus'  >Buy</p></Link>
                    <Link to='/instant-sell'><p className='buy'>Sell</p></Link>
                </div>
                <section className='sectBtc'>
                    <h5>Coin to Buy</h5>
                    <select className='coinBuy' name="coinToBuy" id="buyCoin"><option value=""></option>
                        <option value="BTC">Bitcoin(BTC)</option>
                        <option value="USDT">United State Dollars Tether(USDT)</option>
                        <option value="ETH">Ethereum</option>
                        <option value="ETH">XRP</option>
                    </select>
                </section>
                <section className='sectBtc'>
                    <h5>Currency</h5>
                    <select className='coinBuy' name="coinToBuy" id="buyCoin"><option value=""></option>
                        <option value="BTC">Naira(NGN)</option>
                        <option value="USDT">United State Dollars (USD)</option>
                        <option value="ETH">Pounds(GBP))</option>
                        <option value="ETH">Euro(EUR))</option>
                    </select>
                </section>
                <section className=''>
                    <h5 className='sectBtc'>Amount</h5>
                    <InputGroup className="mb-3">
                        <InputGroup.Text>NGN</InputGroup.Text>
                        <Form.Control aria-label="Amount (to the nearest dollar)" />
                    </InputGroup>
                </section>
                <button className='secButton'>Continue</button>



            </div>
        </div>
    )
}

export default Buy