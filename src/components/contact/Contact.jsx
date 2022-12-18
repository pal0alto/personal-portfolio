import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";
import {BsGithub, BsWhatsapp, BsLinkedin} from 'react-icons/bs'
import {GrMail} from 'react-icons/gr'

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_jb7u6n8', 'template_4hd43p7', formRef.current, 'v5zuLC_uVLuVWKU7r')
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset()
  };

  return (
    <section id='contact'>

    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <BsWhatsapp className="c-icon wp" />
              <a href="https://api.whatsapp.com/send?phone=905541701574" target='_blank'>+90 (554) 170 15 74</a>
            </div>
            <div className="c-info-item">
              <GrMail className="c-icon" />
              <a href="mailto:altugky@gmail.com" target='_blank'>altugky@gmail.com</a>
            </div>
            <div className="c-info-item li">
              <BsLinkedin className="c-icon" />
              <a href="https://www.linkedin.com/in/altu%C4%9F-kaya-6b6a52184/" target='_blank'>Connect with me</a>
            </div>
            <div className="c-info-item">
              <BsGithub className="c-icon" />
              <a href="https://github.com/pal0alto" target='_blank'>My github page</a>
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "  Your mail was sent. Thank you."}
          </form>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Contact;
