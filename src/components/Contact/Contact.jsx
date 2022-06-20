import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_93kvz47', 'template_u82ferp', form.current, 'CZ_GrQy-YOFPugxOC')
    
    e.target.reset();

    window.alert("Wiadomość wysłana!");
  };

  return (
    <section id='contact'>
      <div className="contact_header">
        <h3>Mail</h3>
        <h2>Kontakt</h2>
      </div>    
      <div className="container_0 contact_container">
        <div className="contact_options">
          <article className='contact_option'>
            <MdOutlineEmail className='contact_icon'/>
            <h4>Email</h4>
            <h5>mikolaj.andrzejewski999@gmail.com</h5>
            <a href="mailto:mikolaj.andrzejewski999@gmail.com">Wyślij wiadomość</a>
          </article>
          <article className='contact_option'>
            <BsWhatsapp className='contact_icon'/>
            <h4>WhatsApp</h4>
            <h5>Numer ukryty</h5>
            <a href="https://api.whatsapp.com/send?phone+733115515">Wyślij wiadomość</a>
          </article>
        </div>
        <form ref={form} onSubmit = {sendEmail}>
          <input type="text" name='name' placeholder='Imię i nazwisko' required/>
          <input type="email" name='email' placeholder='Email' required/>
          <textarea type="message" rows="7" placeholder='Wiadomość' required/>
          <div>
          <button type='submit' className='btn btn-2 contact_button_send'>Wyślij wiadomość</button>
          </div>
          
        </form>
      </div>
    </section>
  )
}

export default Contact