import React, { useRef } from "react";
import "./Contact.css";
import { AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";
import emailjs from "@emailjs/browser";
import { PiMessengerLogoBold } from "react-icons/pi";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vh9zlcd",
        "template_v8ti2ob",
        form.current,
        "7FG5e9gIqM3eZBz4D"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact</h2>

      <div className='container contact-container'>
        <div className='contact-options'>
          <article className='contact-option-card'>
            <AiOutlineMail />
            <h4>Email</h4>
            <p className='text-light'>imran.biswas.dev@gmail.com</p>
            <a href='mailto:useandthrow2209@gmail.com'>Send a message</a>
          </article>
          <article className='contact-option-card'>
            <AiOutlineWhatsApp />
            <h4>Whatsapp</h4>
            <p className='text-light'>+91-7365057128</p>
            <a
              href='https://api.whatsapp.com/send?phone=7365057128'
              target='_blank'
            >
              Send a message
            </a>
          </article>
          <article className='contact-option-card'>
            <PiMessengerLogoBold />
            <h4>Messenger</h4>
            <p className='text-light'>Hello, I'm Imran!</p>
            <a href='https://m.me/imran.biswas.73700' target='_blank'>
              Send a message
            </a>
          </article>
        </div>
        <form className='contact-form' ref={form} onSubmit={sendEmail}>
          <input
            type='text'
            name='name'
            placeholder='Your name'
            required
            className='input-fields'
            autoComplete='true'
          />
          <input
            type='email'
            name='email'
            placeholder='Your email'
            required
            className='input-fields'
            autoComplete='true'
          />
          <textarea
            name='message'
            id=''
            rows='7'
            placeholder='Your message'
            required
            className='input-fields'
          />
          <button type='submit' className='btn btn-primary'>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
