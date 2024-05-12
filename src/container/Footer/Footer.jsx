import React from 'react';

import {FooterOverlay, Newsletter} from '../../Components';
import {images} from '../../constants';
import {FiFacebook, FiTwitter, FiInstagram} from 'react-icons/fi';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import './Footer.css';



const Footer = () => (
  <div className='app__footer section__padding '>
    <FooterOverlay />
    <Newsletter />

    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contact</h1>
        <p className='p__opensans'> 1234 Main Street, Anytown, USA</p>
        <p className='p__opensans'> +1 800-555-6789</p>
        <p className='p__opensans'> +1 800-555-6789</p>
      </div>
      <div className='app__footer-links_logo'>
        <img src={images.restaurant_logo} alt='footer logo' style={{borderRadius:100}}/>
        <p className='p__opensans'> "The best way to find yourself is to lose yourself in the service of others."</p>
        <img src={images.spoon} alt='spoon_img' style={{marginTop:  15}} />
        <div className='app__footer-links_icons'>
          <FiFacebook className='app__footer-links_icons_icon'/>
          <FiTwitter className='app__footer-links_icons_icon'/>
          <FiInstagram className='app__footer-links_icons_icon'/>
        </div>
      </div>
      <div className='app__footer-links_work'> <h1 className='app__footer-headtext'>Working Hours</h1>
        <p className='p__opensans'> Monday - Friday:</p>
        <p className='p__opensans'>  08:00 am - 12:00 am</p>
        <p className='p__opensans'> Saturday - Sunday: </p>
        <p className='p__opensans'>  07:00 am - 11:00 pm</p></div>
    </div>
  <div className='footer__copyright'>
    <p className='p__opensans'> &#169; 2024 The Local Craft Food. All Rights reserved 
    </p><hr/><br></br>
    <p className='p__opensans'>  Designed by <span style={{color: '#f4c10f'}}><a href="https://sarthak-yadav-portfolio.netlify.app/" target="_blank">Sarthak Yadav</a></span></p>
    <div className='app__footer-links_logo'>
    <a href="https://www.instagram.com/the___enigma_/" target="_blank" rel="noopener noreferrer">
      <FaInstagram size={25} />
    </a>
    <a href="https://www.linkedin.com/in/sarthak-001-001-yadav/" target="_blank" rel="noopener noreferrer">
      <FaLinkedin size={25} />
    </a>
    <a href="https://github.com/Sarthakyadav98/" target="_blank" rel="noopener noreferrer">
      <FaGithub size={25} />
    </a>
  </div>

    
  
  </div>
  </div>
);

export default Footer;
