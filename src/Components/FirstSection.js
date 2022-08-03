import React from "react";
import appStore from "./Images/Group 68.svg";
import googlePlay from "./Images/Group 69.svg";

const FirstSection = () => {
    return (
        <div>
            <div className="firstSeg">
                {/* <div className="circle">
                <p className="c"></p>
                </div> */}
                <div className="firstBuy">
                    <h1>Buy, sell and manage your Crypto on TradExpress.</h1>
                    <p>
                    Easily Trade Cryptocurrencies like BTC, USDT, ETH, LTC & XRP with NGN.
                    </p>
                </div>
                <button className="buttonF">Get Started</button>
                <div className="space"></div>
                <div className="appButton">
                    <img src={appStore} alt="" />
                    <img className="googleButt" src={googlePlay} alt="" />
                </div>
            </div>
        </div>
    );
};

export default FirstSection;
