import React from "react";
import "./Contact.css";
import phone from "../../img/phone.png";
import email from "../../img/email.png";
import address from "../../img/address.png";
import { useRef,useState,useContext } from "react";
import emailjs from '@emailjs/browser';
import { ThemeContext } from "../../context";
// import { useState,useContext} from "react";
const Contact = () => {
  const formref = useRef();
  const [done,setDone]=useState(false)
  const theme = useContext(ThemeContext);
  const darkmode = theme.state.darkMode;
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_yyhij3h",
        "template_9592scg",
        formref.current,
        ("X6JsjX74W-l48PuCv")
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)

        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Lets discuss your Project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={phone} alt="" className="c-icon" />
              +91 9987266397
            </div>
            <div className="c-info-item">
              <img src={email} alt="" className="c-icon" />
              starboyankit20@gmail.com
            </div>
            <div className="c-info-item">
              <img src={address} alt="" className="c-icon" />
              New agripada Santacruz (East) Mumbai:40055.
            </div>
          </div>
        </div>
        <div className="c-right">
          <div className="c-desc">
            <p>
              {" "}
              <b>What's your story?</b> Get in touch Always available
              freelancing if the project comes along.
            </p>
          </div>
          <form ref={formref} onSubmit={handleSubmit}>
            <input style={{backgroundColor:darkmode && "#333"}} type="text" placeholder="Name" name="user_name" />
            <input style={{backgroundColor:darkmode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
            <input style={{backgroundColor:darkmode && "#333"}} type="text" placeholder="Email" name="user_Email" />
            <textarea style={{backgroundColor:darkmode && "#333"}} name="" id="" cols="30" rows="10"></textarea>
            <button>Submit</button>
            {done && "thank you...."}
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
