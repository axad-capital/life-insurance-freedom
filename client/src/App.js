import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'
import PrivacyPolicy from './pages/Legal/PrivacyPolicy';
import Terms from './pages/Legal/Terms';
import Disclaimer from './pages/Legal/Disclaimer';
import Partners from './pages/Legal/Partners';
import Thanks from './components/Thanks/Thanks';
import QuinnQuote from './components/QuinnQuote/QuinnQuote';
import QuinnThanks from './components/QuinnQuote/QuinnThanks';

function App() {
  return (
    <div className="App">
      <div style={{ opacity: '0', position: 'absolute', left: '50%' }}>
        <a href="https://www.a1jkghtrk.com/28KL6/3F292Q1/?source_id={affiliate_id}&sub1={transaction_id}">offers!</a>
      </div>
      <Router>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/privacy-policy' element={<PrivacyPolicy />} />
          <Route exact path='/terms' element={<Terms />} />
          <Route exact path='/disclaimer' element={<Disclaimer />} />
          <Route exact path='/partners' element={<Partners />} />
          <Route exact path='/thanks' element={<Thanks />} />
          <Route exact path='/q-quote' element={<QuinnQuote />} />
          <Route exact path='/thanks-q' element={<QuinnThanks />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
