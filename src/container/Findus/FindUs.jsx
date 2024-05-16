import React from 'react';

import {SubHeading} from '../../Components';
import {images} from '../../constants';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className='app__wrapper_info'>
      <SubHeading title="Contact" />
      <h1 className='headtext__cormorant' style={{marginBottom: '3rem'}}>Find Us</h1>
      <div className='app__wrapper-content'>
        <p className='p__opensans'>Crowne Plaza New Delhi, an IHG Hotel CW9 75G</p>
        <p className='p__opensans' style={{color:'#DCCA87', margin:'2rem 0'}}>Opening Hours</p>
        <p className='p__opensans'>Mon - Fri: 10:00 AM - 02:00 AM</p>
        <p className='p__opensans'>Sat - Sun: 10:00 AM - 03:00 AM</p>
    </div>
    <button className='custom__button' style={{marginTop: '2rem'}}>Get Directions</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.findus} alt="findus" />
      </div>
  </div>
);

export default FindUs;
