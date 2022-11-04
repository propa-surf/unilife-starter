import React from 'react'
import Modal from 'react-modal'
import '../stylesheets/BookingView.css'
import { MdHomeWork } from "react-icons/md";

function BookingView({modalIsOpen, closeModal, property}) {

  return (
    <div>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className='book-viewing-modal'>

        <div className='booking-view-container'>

          <div className='booking-view-top-container'>
            <div className='booking-view-header-and-address'>
              <h2>Booking a Viewing</h2>
              <p>{property?.address?.street}, {property?.address?.city}, {property?.address?.postcode}</p>
            </div>
            <MdHomeWork className='booking-view-icon'/>
          </div>

          <form className='booking-view-form' onSubmit={closeModal}>
            <div className='booking-view-contact-details'>
              <label htmlFor='booking-view-name'>Name</label>
              <input type='text' className='booking-view-name' placeholder='Enter your name' required/>
              <label htmlFor='booking-view-email'>Email</label>
              <input type='email' className='booking-view-email' placeholder='Enter your email address' required/>
              <label htmlFor='booking-view-phone'>Phone Number</label>
              <input type='tel' className='booking-view-phone' placeholder='Enter your phone number' required/>
            </div>
            <div className='booking-view-message-submit'>
              <div className='booking-view-message-container'>
                <label htmlFor='booking-view-message'>Message</label>
                <textarea className='booking-view-message' placeholder='Enter your message' rows='6' cols='30'/>
              </div>
              <button type='submit' className='booking-view-submit-btn'>Submit</button>
            </div>
          </form>

        </div>

      </Modal>
    </div>
  )
}

export default BookingView