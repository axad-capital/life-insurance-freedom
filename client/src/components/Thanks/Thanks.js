import React from 'react'
import './thanks.css'
import Logo from '../HomeComp/life-insurance-freedom-logo.png'

const Thanks = () => {
    return (
        <div>
            <div className="nav">
                <img onClick={() => window.location.href = '/'} className='logo' src={Logo} alt="logo" />
                <div className='call-us-container'>
                    <p className='call-us'>Request A Call</p>
                    <a className='number' href="tel:8778677148">(877) 867-7148</a>
                </div>
            </div>

            <h1 style={{ textAlign: "center" }}>Check Out Your Life Insurance Quotes</h1>
            <br />

            <iframe title='pixel' src="https://www.a1jkghtrk.com/?nid=1715&oid=940&amount=AMOUNT" scrolling="no" frameborder="0" width="1" height="1"></iframe>
        </div>
    )
}

export default Thanks