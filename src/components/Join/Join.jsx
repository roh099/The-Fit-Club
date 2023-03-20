import React, { useRef } from 'react'
import './Join.css'
import emailjs from '@emailjs/browser';


const Join = () => {
    const form=useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_hdx00hh', 'template_qjjkrnm', form.current, 'WGo1CkFXdt5xSODlb')
          .then((result) => {
              console.log(result.text);
              console.log("message sent");
              e.target.reset();
          }, (error) => {
              console.log(error.text);
          });
      };
    
    return (
        <div className="Join" id="join-us">
            <div className="left-j">
              <hr />
                <div>
                    <span className='stroke-text'> READY TO</span>
                    <span> LEVEL UP</span>
                </div>
                <div>
                    <span> YOUR BODY</span>
                    <span className='stroke-text'> WITH US</span>
                </div>
            </div>
            <div className="right-j">
                <form ref={form} className="email-container" onSubmit={sendEmail}>
                    <input type="e-mail" name='user_email' placeholder='Enter your E-Mail id '/>
                    <button className='btn btn-j'>Join Now</button>
                </form>
            </div>
        </div>
    )
}

export default Join