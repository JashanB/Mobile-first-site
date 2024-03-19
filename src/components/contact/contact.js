import { useState } from 'react';
import React from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';


export default (props) => {
  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastname] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  // const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [msgError, setMsgError] = useState(false);

  function verifyEmail(text) {
    if (text.includes('@') && text.includes('.')) {
      return true;
    }
  }
  
  function submitForm(name, email, message) {
    if (!name || name.length === 0) {
      setNameError(true);
    } else {
      setNameError(false);
    }
    if (!email || verifyEmail(email) === false) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    if (!message || message.length === 0) {
      setMsgError(true);
    } else {
      setMsgError(false);
    }
    if (name.length && name.length > 0 && email && verifyEmail(email) && message && message.length > 0) {
      sendEmail();
      setSubmitted(true);
    }
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'template_ebjzkv9', { name: name, emai: email, message: message }, '-gZwc_YCDpSfGPa3n')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  //if submitted and values correct, switch to display Thank you   
  return (
    <div className="content_div_type3">
      <div className='contact-subheader'>
        {submitted ? <h2>Thank you!</h2> : <h2>Contact Me</h2>}
      </div>
      <div className={submitted ? 'text_input_box_hidden' : 'text_input_box'}>
        <div className="box_title">
          <h3>Name*</h3>
          {nameError && <h3 className='error_text'>Field Required</h3>}
        </div>
        <div className="input_div_sub">
          {/* <input type="text" id="firstName" name="firstName" onChange={(event) => setFirstName(event.target.value)}></input> */}
          <input type="text" id="firstName" name="firstName" onChange={(event) => setName(event.target.value)}></input>
        </div>
      </div>
      <div className={submitted ? 'text_input_box_hidden' : 'text_input_box'}>
        <div className="box_title">
          <h3>Email*</h3>
          {emailError && <h3 className='error_text'>Please use a valid email</h3>}
        </div>
        <div className="input_div_sub">
          <input type="text" id="email" name="email" onChange={(event) => setEmail(event.target.value)}></input>
        </div>
      </div>
      <div className={submitted ? 'text_input_box_hidden' : 'text_input_box'}>
        <div className="box_title">
          <h3>Message*</h3>
          {msgError && <h3 className='error_text'>Field Required</h3>}
        </div>
        <div className="input_div_sub-lg">
          <textarea type="text" id="message" name="message" onChange={(event) => setMessage(event.target.value)}></textarea>
        </div>
      </div>
      <div className={submitted ? 'send_button_div_left_hidden' : 'send_button_div_left'}>
        <button className='book_button' onClick={() => submitForm(name, email, message)}>Send</button>
      </div>
    </div>
  )



}