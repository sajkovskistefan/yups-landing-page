import YupsLogoPurple from './Components/UI/Assests/YupsLogoPurple.png';
import { Navbar } from './Components/Pages/Navbar';
import { Cards } from './Components/Pages/Cards';
import './App.css';
import { WhatWeDo } from './Components/Pages/WhatWeDo';
import { Testemonials } from './Components/Pages/Testemonials';
import { Form } from './Components/Pages/Form';

function App() {
  return (
    <div className='App'>
      <div className='nav-pirple-div-banner-container'>
        <Navbar />
        {/* <div style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),  url(${YupsBackgroundPhoto})`,
        backgroundRepeat: 'no-repeat',
        backgroundPositionX: "center",
        backgroundPositionY: "center",
        backgroundSize: "100% 100%"
      }} className='background_yups_div'>
      </div> */}
        <div className='main-purple-div'>
          <img className='main-purple-div-logo' src={YupsLogoPurple} alt='logo in purple' />
          <div className='main-purple-div-text'>
            {/* We are your new in-house marketing and IT team */}
            YOUR PARTNER FOR PROVIDING THE RIGHT DATA-DRIVEN MARKETING STRATEGY BUILD ON HIGH-TECH SOLUTIONS TO DRIVE YOUR BUSINESS FORWARD.
          </div>
        </div>
        <div className='first-banner'>
          <span className='first-banner-text'>Why us?</span>
          <h4 className='first-banner-header'>Experts, enthsiasts</h4>
          <div className='first-banner-div-sentence'>We are IT and marketing experts, enthusiasts from all around the world. Our guiding goal is delivery of the best services possible</div>
        </div>
      </div>
      <div className='moto-div'>
        <div className='moto-div-heading'>
          We are your new in-house like marketing and IT team
        </div>
        <a href='#formId' className='mt-5 btn btn-outline-dark btn-lg work-with-us-button'>Work with US</a>
      </div>
      <div className='first-banner'>
        <span className='first-banner-text'>Coverage</span>
        <h4 className='first-banner-header'>What can we cover?</h4>
        <div className='first-banner-div-sentence'>We can cover anything from Facebook and Google ads to custom landing pages and brand recognition to data analysis to find the real answer on what works</div>
      </div>
      <Cards />
      <div style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://idsb.tmgrup.com.tr/ly/uploads/images/2022/11/03/239283.jpg)`,
        backgroundRepeat: 'no-repeat',
        backgroundPositionX: "center",
        backgroundPositionY: "center",
        backgroundSize: "100% 100%",
      }} className='background_yups_div d-flex justify-content-center align-items-center'>
        <h1 className='prague-header'>Your link to the world</h1>
      </div>
      <div className='first-banner'>
        <span className='first-banner-text'>This again</span>
        <h4 className='first-banner-header'>Get rich sooon</h4>
        <div className='first-banner-div-sentence'>Me say less words. Less wodrds save time, me more sleep with new time</div>
      </div>
      <WhatWeDo />
      <Testemonials />
      <Form />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
