import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div>
        <div className='footer-container'>
            <br />
            <p>LifeInsuranceFreedom.com is not an insurance or operating company but connects individuals with insurance providers. Products and services are provided exclusively by the providers. Descriptions are for informational purposes only and subject to change. Insurance plans may not be available in all states. LifeInsuranceFreedom.com is not affiliated with any insurance plan nor does it represent or endorse any plan. LifeInsuranceFreedom.com is not affiliated with or endorsed by the United States government or the federal Medicare program . By using this site, you acknowledge that you have read and agree to the Terms of Service. and Privacy Policy</p>
            <br />
            <p>*Rate calculated for a 50 year old woman from Washington state with a $6,000 policy. Actual rates may vary</p>
            <br />
            <p>**All testimonials are paid actors. Individual results may vary, for details please visit lifeinsurancefreedom.com/disclaimer</p>
            <br />
            <div className='terms'>
                <Link to='/privacy-policy'><h6>Privacy Policy</h6></Link>
                <Link to='/terms'><h6>Terms and Conditions</h6></Link>
                <Link to='/disclaimer'><h6>Disclaimer</h6></Link>
                <Link to='/partners'><h6>Partners</h6></Link>
            </div>
            <br />
            <p>&copy; 2020-22 lifeinsurancefreedom.com. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer