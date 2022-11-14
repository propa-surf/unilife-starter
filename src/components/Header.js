import React, {useState} from 'react'
import '../stylesheets/Header.css'
import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineHeart } from "react-icons/ai";
import { BiEnvelope } from "react-icons/bi";
import ContactUs from './ContactUs';


function Header() {

  const[modalIsOpen, setModalIsOpen] = useState(false)

  function openModal(){
    setModalIsOpen(true)
  }

  function closeModal(){
    setModalIsOpen(false)
  }

  return (
    <div className='header-container'>
        <div className='header-left'>
            <a href="/" className='unilife-link'><IoHomeOutline className='icon-house'/>UniLife</a>
        </div>
        <ContactUs className='contact-us-overlay' modalIsOpen={modalIsOpen} closeModal={closeModal}/>
        <div className='header-right'>
            <button className='shortlist'><AiOutlineHeart className='icon-heart'/>Shortlist</button>
            <button className='contactus' onClick={openModal}><BiEnvelope className='icon-envelope'/>Contact Us</button>
        </div>
    </div>
  )
}

export default Header