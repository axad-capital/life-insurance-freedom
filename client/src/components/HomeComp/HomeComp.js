import React from 'react'
import './homeComp.css'
import Logo from './life-insurance-freedom-logo.png'
import AntiV from './antivirus-img.png'
import Gar from './guaranteed.png'
import SayNo from './say-no.png'
import Fast from './fast.png'
import Footer from '../Footer/Footer'

const HomeComp = () => {
    return (
        <div>
            <div className="nav">
                <img className='logo' src={Logo} alt="logo" />
                <div className='call-us-container'>
                    <p className='call-us'>Request A Call</p>
                    <a className='number' href="tel:8778677148">(877) 867-7148</a>
                </div>
            </div>

            <div className="header">
                <div className="form">
                    <h1 className="form-title">Focus On What Really Matters</h1>
                    <h3 className="form-sub-title">You Could Be Eligible To Get Coverage For As Little As $15/Month</h3>

                    <label htmlFor="zip">Enter Your Zipcode</label>
                    <br />
                    <input name='zip' type="text" id='zip' className="zip" placeholder='Zipcode' />
                    <br />

                    <label htmlFor="birth">Your Date Of Birth</label>
                    <br />
                    <input type="date" name="birth" id="birth" className='birth' />
                    <br />

                    <label htmlFor="coverage-type">Coverage Type</label>
                    <br />
                    <select name="coverage-type" id="coverage-type" className='coverage-type'>
                        <option value="Term 1 Year">Term 1 Year</option>
                        <option value="Term 5 Years">Term 5 Years</option>
                        <option value="Term 10 Years">Term 10 Years</option>
                        <option value="Term 15 Years">Term 15 Years</option>
                        <option value="Term 20 Years">Term 20 Years</option>
                        <option value="Term 25 Years">Term 25 Years</option>
                        <option value="Term 30 Years">Term 30 Years</option>
                        <option value="Term 40 Years">Term 40 Years</option>
                        <option value="Whole Life">Whole Life</option>
                        <option value="Universal Life">Universal Life</option>
                        <option value="Variable Life">Variable Life</option>
                        <option value="Investment">Investment</option>
                        <option value="Cash Value">Cash Value</option>
                        <option value="Final Expense">Final Expense</option>
                        <option value="Not Sure">Not Sure</option>
                    </select>
                    <br />

                    <label htmlFor="coverage-amount">Coverage Amount</label>
                    <br />
                    <select name="coverage-amount">
                        <option value="10000-100000">10,000-100,000</option>
                        <option value="100000-200000">100,000-200,000</option>
                        <option value="200000-300000">200,000-300,000</option>
                        <option value="300000-400000">300,000-400,000</option>
                        <option value="400000-500000">400,000-500,000</option>
                        <option value="500000-600000">500,000-600,000</option>
                        <option value="600000-700000">600,000-700,000</option>
                        <option value="700000-800000">700,000-800,000</option>
                        <option value="800000-900000">800,000-900,000</option>
                        <option value="900000-1000000">900,000-1,000,000</option>
                        <option value="1000000+">1,000,000 +</option>
                    </select>

                    <p className='permission'>
                        By clicking the "Submit" button, you are providing your electronic signature in which you consent, acknowledge and agree to the following: (a) our Terms of Service and Privacy Policy, including our arbitration provision. (b) You are providing express written consent to share your information with LifeInsuranceFreedom.com, and up to 5 Industry Partners, or authorized third parties calling on our, or their behalf who may contact you for marketing purposes. (c) You give consent (consent not required as a condition to purchase a good/service) for them/us to contact you through automated means at the phone number(s) and at the email address you have provided (e.g. automatic telephone dialing system, text, artificial or pre-recorded messaging) via telephone, mobile device (including SMS and MMS) and/or email, even if your telephone number is currently listed on any state, federal or corporate Do Not Call registry. You may opt-out from SMS or Text messages at any time by replying STOP. Data and Msg rates may apply. As an alternative, you may contact us by email at: support@lifeinsurancefreedom.com. You understand that you may revoke this consent at any time.
                    </p>
                    <br />

                    <button onClick={() => console.log('clicked')} className="submit-btn">Submit</button>
                    <br />
                    <img className='anti-v' src={AntiV} alt="anti-virus" />
                </div>
            </div>

            <div className="how-it-works-container">
                <h1 className="how-it-works-title">How It Works</h1>
                <br />
                <h4 className="how-it-works-sub-title">Your family now has less to worry about when grieving. Coverage never expires and can help pay for bills, debts, funeral costs, etc.</h4>
                <div className='how-it-works-info-container'>
                    <div>
                        <img className='how-it-works-icons' src={Gar} alt="gar" />
                        <h2>Top Coverage</h2>
                        <p>If you're between the 18-70, you will not be turned down for health reasons.</p>
                    </div>
                    <div>
                        <img className='how-it-works-icons' src={SayNo} alt="say-no" />
                        <h2>No Medical Exam</h2>
                        <p>Skip the medical exam, and get your coverage as soon as you're ready.</p>
                    </div>
                    <div>
                        <img className='how-it-works-icons' src={Fast} alt="fast" />
                        <h2>Benefits Paid Quickly</h2>
                        <p>Your family will likely get the payout within 7-10 business days.</p>
                    </div>
                </div>
            </div>

            <div className="FAQ-container">
                <h1 className="FAQ-title">Frequently Asked Questions</h1>
                <div>
                    <h2>What Is Life Insurance?</h2>
                    <br />
                    <h4>Final Expense is a whole life insurance policy meant to cover funeral expenses. These policies typically have payouts between $5,000 - $25,000 and don't usually go higher than that. Having a Final Expense policy in place can remove a lot of the burden on your family upon your death. Funeral expenses are rising extremely fast and policies themselves can be quite affordable. If you would like to see quotes please enter your zip code above.</h4>
                </div>
                <div>
                    <h2>How Do I Buy Life Insurance?</h2>
                    <br />
                    <h4>Our website is dedicated to providing you quote from multiple companies in your area to make sure that you receive the best price possible. If you would like to see quotes on Final Expense, please enter your information above and we will work to find you the best possible quotes free of charge.</h4>
                </div>
                <div>
                    <h2>Do I Need Life Insurance?</h2>
                    <br />
                    <h4>Having a Life Insurance policy in place is a smart decision that can save your family thousands. In cases of accidental death there is a large chance that your families savings could be completely wiped out by an unexpected funeral. Funerals can lead family's into debt and having a safety net will remove that burden. If you're looking to relieve the amount of stress on your family, looking for a Life Insurance policy is a great way to do it.</h4>
                </div>
            </div>
            
            <Footer />
        </div>
    )
}

export default HomeComp