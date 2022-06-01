import React from 'react'
import './quinnStreet.css'

const QuinnThanks = () => {

  let adData = JSON.parse(localStorage.getItem('quinnLifeData'))
  if (adData === null) {
    var listings = false
  } else {
    listings = adData.listings

  }

  console.log(listings)

  if (!listings) {
    return (
      <div className='no-ads'>
        <h1 className='ad-title'>Sorry! There are currently no offers for your area at this time, try a different zipcode or try again later.</h1>
        <button onClick={() => window.location.href = '/q-quote'} className='back-btn'>Back</button>
        <iframe title='pixel' src="https://www.a1jkghtrk.com/?nid=1715&oid=940&amount=AMOUNT" scrolling="no" frameborder="0" width="1" height="1"></iframe>
      </div>
    )
  } else {

    return (
      <div>
        <div className='ad-container'>
          <h1 className='ad-title'>Compare Life Insurance Quotes in Your Area. Click on 2 or more Insurance Partners below to compare quotes and maximize your savings.</h1>
          <div className='ads'>
            {listings.map(ads => (
              <div className='ad' key={ads.buyerID}>
                <img src={ads.logo} alt={ads.displayname} />
                <div>
                  <p className='listing-title'>{ads.listingTitle}</p>
                </div>
                <button onClick={() => window.location.href = ads.url} className='get-quote-btn'>GET QUOTE</button>
              </div>
            ))}
          </div>
        </div>
        <iframe title='pixel' src="https://www.a1jkghtrk.com/?nid=1715&oid=940&amount=AMOUNT" scrolling="no" frameborder="0" width="1" height="1"></iframe>
      </div>
    )
  }
}

export default QuinnThanks