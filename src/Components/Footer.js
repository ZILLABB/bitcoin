import React from 'react'
import { footerData } from './data'
import gr from './Images/Group 78.svg'

const Footer = () => {
    return (
        <div>
            <div className='footer'>
                {footerData.map((data, index) => (
                    <div key={index}>
                        <nav>
                            <li className='title'>
                                <h5>{data.title}</h5>
                                <div>
                                    {data.subTitle.map((subData,index) => (
                                        <div key={index}>
                                            <p>{subData.Name}</p>
                                            <p>{subData.name}</p>
                                            <p>{subData.nam}</p>
                                            <p>{subData.na}</p>
                                            <p>{subData.n}</p>
                                        </div>
                                    )
                                    )}
                                </div>
                            </li>
                        </nav>
                    </div>
                )
                )}
            </div>
            <div className='gr'>
                <img  src={gr} alt="" />
            </div>
        </div>
    )
}

export default Footer