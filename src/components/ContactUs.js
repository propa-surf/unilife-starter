import React from 'react'
import Modal from 'react-modal'
import '../stylesheets/ContactUs.css'

function ContactUs({modalIsOpen, closeModal}) {
  return (
    <div>
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className='contact-us-modal'>

            <div className='contact-us-container'>

            <div className='contact-us-top-container'>
                <div className='contact-us-header-and-address'>
                <h2>Contact Us</h2>
                <p>Feel free to contact us if you have any questions.
Looking forward to hear from you.</p>
                </div>
                
            </div>

            <form className='contact-us-form' onSubmit={closeModal}>
                <div className='contact-us-contact-details'>
                <label htmlFor='contact-us-name'>Name</label>
                <input type='text' className='contact-us-name' placeholder='Enter your name' required/>
                <label htmlFor='contact-us-email'>Email</label>
                <input type='email' className='contact-us-email' placeholder='Enter your email address' required/>
                <label htmlFor='contact-us-phone'>Phone Number</label>
                <input type='tel' className='contact-us-phone' placeholder='Enter your phone number' required/>
                </div>
                <div className='contact-us-message-submit'>
                <div className='contact-us-message-container'>
                    <label htmlFor='contact-us-message'>Message</label>
                    <textarea className='contact-us-message' placeholder='Enter your message' rows='6' cols='30'/>
                </div>
                <button type='submit' className='contact-us-submit-btn'>Submit</button>
                </div>
            </form>

            </div>

        </Modal>
    </div>
  )
}

export default ContactUs