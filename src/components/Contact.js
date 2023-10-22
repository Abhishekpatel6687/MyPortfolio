import React from 'react'
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPhoneAlt,
  FaInstagram,
  } from "react-icons/fa";
const Contact = () => {
  return (
    <div className='contact'>
    <div className='container'>
        <div className='contactSection'>
                <div className='row justifyCenter'>
                   <div className='col-6'>
                   <div className='contactSection-logo'>
                <img src='/images/logo.png' alt=''/>
                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inci- didunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exe- rcitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                   <ul className='contactCircles'>
                   <li>
                   <a href="instagram.com/simple_boy_abhishek_6687"><FaInstagram /></a> 
                  </li>
                  <li>
                   <a href="https://www.linkedin.com/in/abhishek-patel-2a6599240"><FaLinkedinIn /></a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/profile.php?id=100027938424252&mibextid=ZbWKwL"><FaFacebookF /></a>
                  </li>
                  <li>
                   <a href="tel:91+7071326687"><FaPhoneAlt /></a>
                  </li>
                </ul>
                 
                   </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Contact
