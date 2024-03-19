import React from 'react';
import './header.css';
import twitter from '../../images/icons8-twitter-30.svg';
import facebook from '../../images/icons8-facebook-30.svg';
import instagram from '../../images/icons8-instagram-30.svg';
import menu from '../../images/icons8-hamburger-menu-24.png';
import close from '../../images/icons8-close-24.png'
import { HashLink as Link } from 'react-router-hash-link';

export default function Header (props) {
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -70;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  }

  if (props.breakpoint600) {
    return (
      <div className='nav'>
        <div className="header">
          <div>
            <h3>Your Name</h3>
          </div>
          <div className='menu-expander'>
            <img alt="" src={props.expanded ? close : menu} onClick={() => props.expanded ? props.setExpanded(false) : props.setExpanded(true)}></img>
          </div>
        </div>

        <div className={props.expanded ? "mobile-nav-expanded" : "mobile-nav-collapsed"}>
          <div className='navbar-item'></div>
          <div className='navbar-item'><Link smooth to="/#services" className='mobile-nav-item' scroll={el => scrollWithOffset(el)} onClick={() => props.setExpanded(false)}>My Services</Link></div>
          <div className='navbar-item'><Link smooth to="/#about" className='mobile-nav-item' scroll={el => scrollWithOffset(el)} onClick={() => props.setExpanded(false)}>About Me</Link></div>
          <div className='navbar-item'><Link smooth to="/#contact" className='mobile-nav-item' scroll={el => scrollWithOffset(el)} onClick={() => props.setExpanded(false)}>Contact Me</Link></div>
          <div className='navbar-item'><Link smooth to="/#book" className='mobile-nav-item' scroll={el => scrollWithOffset(el)} onClick={() => props.setExpanded(false)}>Book an Appointment</Link></div>
          <div className='mobile-nav-social'>
            <Link to={"https://twitter.com/katelynfinance"} className='icon' ><img alt="" src={twitter}></img></Link>
            <Link to={"facebook.com"} className='icon'><img alt="" src={facebook}></img></Link>
            <Link to={"instagram.com"} className='icon'><img alt="" src={instagram}></img></Link>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="header">
        <div>
          <h3>Your Name</h3>
        </div>
        <div id="logo"><img alt="" src={twitter}></img></div>
        <div className='desktop-nav-social'>
          <Link to="/#" className='icon' href={"https://twitter.com/katelynfinance"}><img alt="" src={twitter}></img></Link>
          <Link to="/#" className='icon' href={"facebook.com"}><img alt="" src={facebook}></img></Link>
          <Link to="/#" className='icon' href={"instagram.com"}><img alt="" src={instagram}></img></Link>
        </div>
      </div>
    )
  }
}