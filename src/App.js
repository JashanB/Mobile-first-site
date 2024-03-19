import './App.css';
import React from 'react';
import { useState, useEffect } from "react";
// import axios from 'axios';
import Header from './components/header';
import Contact from './components/contact';
import { InlineWidget } from "react-calendly";
// import { Route, Switch, useLocation, BrowserRouter as Router } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import { HashLink as Link } from 'react-router-hash-link';

import './App.css';
import background from "./images/bg10.jpeg"
import background2 from "./images/bg1lg.jpg";
import head from "./images/head2.jpg";
import contact from "./images/contact.jpg";
import fancy from "./images/fancy1.jpg"


function App() {
  const [expanded, setExpanded] = useState(false);
  const [breakpoint600, setBreakPoint600] = useState(false);
  const [breakpoint900, setBreakPoint900] = useState(false);
  const [breakpoint738, setBreakPoint738] = useState(false);
  // const { pathname, hash, key } = useLocation();


  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();

    if (windowSize['width'] && windowSize['width'] >= 900) {
      setBreakPoint900(true);
      setBreakPoint738(false);
      setBreakPoint600(false);

    } else if (windowSize['width'] && windowSize['width'] < 900 && windowSize['width'] >= 738) {
      setBreakPoint600(false);
      setBreakPoint900(false);
      setBreakPoint738(false);
    } else if (windowSize['width'] && windowSize['width'] < 738 && windowSize['width'] >= 600) {
      setBreakPoint600(false);
      setBreakPoint900(false);
      setBreakPoint738(true);
    } else {
      setBreakPoint600(true);
      setBreakPoint900(false);
      setBreakPoint738(true);
    }

  }, [windowSize.width]);

  // useEffect(() => {
  //   // if not a hash link, scroll to top
  //   if (hash === '') {
  //     window.scrollTo(0, 0);
  //   }
  //   // else scroll to id
  //   else {
  //     setTimeout(() => {
  //       const id = hash.replace('#', '');
  //       const element = document.getElementById(id);
  //       if (element) {
  //         element.scrollIntoView();
  //       }
  //     }, 0);
  //   }
  // }, [pathname, hash, key]);

  return (
    // <Switch>
    //   <Route path="/" />
    // </Switch>
    <Router>


      <div className="App">
        <Header breakpoint600={breakpoint600} expanded={expanded} setExpanded={setExpanded} />
        {!expanded &&
          <div className='app-underwrapper'>
            {/* SECTIION 1 */}
            <div className="main_div_type1" style={{ backgroundImage: `url(${background})` }}>

              <div className='content_div_type1'>
                {/*  make extra padding for this particular content div for header pre scroll*/}

                <div className='subheader'>
                  <h2>Everyone deserves financial education</h2>
                </div>
                <div className='subheader'>
                  <h3>Let me teach you!</h3>
                </div>
                <div className='book_button_div'>
                  <Link to="/#book" className='book_button'>Book an Appointment</Link>
                </div>
              </div>

            </div>
            {/* SECTIION 2 */}

            <div id="services" className="main_div_type1">
              <div className='content_div_type1'>
                <div className='subheader'>
                  <h2>My Services</h2>
                </div>
                <div className='div_flex_wrap'>
                  <div className='text_box_1'>
                    <h3>Financial Education</h3>
                    <p>In today's world, financial education is a neccessity, not an option. Book an appointment with me to learn more about personal finance in Canada on a variety of topics, including wealth accumulation, debt management, proper protection, and estate transfer.</p>
                  </div>
                  <div className='text_box_1'>
                    <h3>Financial Solutions</h3>
                    <p>Everyone needs financial solutions, and I help families find the right one for their situation. From proper protection, investments, debt solutions, mortgages, I will complete a full financial needs analysis with you and make sure you have everything you need to accomplish your goals in life.</p>
                  </div>
                  <div className='text_box_1'>
                    <h3>Join My Team</h3>
                    <p>If you are passionate about financial education and helping people, this could be a great opportunity for you. If you are interested in joining an energetic and driven team, book an appointment with me to learn more. </p>
                  </div>
                </div>
                <div className='book_button_div_left'>
                  <Link to="/#book" className='book_button'>Book an Appointment</Link>
                </div>
              </div>
            </div>
            {/* SECTIION 3 */}
            <div id="about" className="main_div_type2">
              <div className="flex_content_div1">
                {breakpoint900 &&
                  <div className='background_breakpoint3' style={{ backgroundImage: `url(${fancy})` }}></div>
                }
                {!breakpoint900 &&
                  <div className='background_breakpoint2' style={{ backgroundImage: `url(${background2})` }}></div>
                }
                {/* same padding as type 1 except no vertical padding until breakpoint */}
                <div className='content_div_type2'>
                  <div className="breakpoint_translate_img"><div className='circle_picture'><img alt="" className='head-pic' src={head}></img></div></div>
                  <div className='about-subheader'>
                    <h2>About Me</h2>
                  </div>
                  <div className='text_box_3'>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id turpis erat. Ut ornare ante lacus, ac pharetra libero volutpat eu. Mauris scelerisque velit ac odio tempor, ut fringilla orci pharetra. Quisque ut tellus tempor dolor pulvinar volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla pellentesque metus quis quam eleifend, eu tincidunt nibh ornare. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent efficitur mauris ac ligula tempus vestibulum. Etiam ultricies dui nibh, vel aliquam nibh malesuada vitae. Suspendisse accumsan eleifend velit, vitae euismod quam congue at.
                    </p>
                    <p>
                    Nunc fermentum pulvinar nibh, non tempus mauris efficitur ac. In hac habitasse platea dictumst. Suspendisse mattis arcu quam, eget efficitur nulla aliquet nec. Donec feugiat felis mi, a dignissim tortor mollis a. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam pellentesque metus in ullamcorper hendrerit. Curabitur scelerisque magna eget leo interdum convallis. Praesent a interdum urna. Nulla tincidunt quam tincidunt enim ornare varius. Sed bibendum dui quis orci iaculis feugiat. In hac habitasse platea dictumst. Sed quis lacus et dolor gravida maximus a non mi. Donec et magna eget eros ullamcorper malesuada.
                    </p>
                  </div>
                  <div className='book_button_div'>
                    <Link to="/#book" className='book_button'>Book an Appointment</Link>
                  </div>
                </div>
              </div>
            </div>
            {/* SECTIION 4 */}
            <div id="book" className="main_div_type3">
              <div className='calendar-content_div'>
                <div className='calendar-subheader'>
                  <h2>Book an Appointment</h2>
                </div>
                {/* <div id='calendar'></div> */}
                <InlineWidget styles={breakpoint738 ? { height: '650px' } : { height: '700px' }} url="https://calendly.com/katelynwaldner/financial-education-with-katelyn?hide_event_type_details=1&hide_gdpr_banner=1" />

              </div>
            </div>
            {/* SECTIION 5 */}
            <div id="contact" className="main_div_type4">
              <div className="flex_content_div2">
                {/* <div className='background_breakpoint'></div> */}
                <div className='background_breakpoint2' style={{ backgroundImage: `url(${contact})` }}></div>

                <Contact />
              </div>
            </div>
            <div className='footer'>
              <div className='subheader'>
                <h3>Your name</h3>
              </div>
              <div className='subheader'>
                <h3>info@yoursite.com</h3>
              </div>
            </div>
          </div>
        }


      </div>
    </Router>
  );
  // return (
  //   <Router>
  //   <Header />
  //   <div className="App">
  //     <Switch>
  //       <Route path='/' render={(props) => <Home {...props} />} />
  //       <Route path='/confirmation' render={(props) => <Search {...props} />} />
  //     </Switch>
  //   </div>
  // </Router>
  // );
}

export default App;
