import React from 'react';

import {SubHeading}  from '../../Components';
import './Header.css';
import {images} from '../../constants';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id="home">
    <div className='app__wrapper_info'>
      <SubHeading title ="Chase the new flavor"/>
      <h1 className='app__header_h1'>The key to Fine Dining</h1>
      <p className='p__opensans' style={{margin: '2rem 0'}}>Experience culinary excellence with every bite and
      indulge yourself in a symphony of flavors crafted by our master chefs. <br /> Enjoy an elegant ambiance that elevates your dining experience, Savor unforgettable moments with exquisite cuisine and impeccable service.</p>
      <button type="button" className='custom__button'>Explore Menu</button>
      </div>

    <div className='app__wrapper_img'>
      <img src={images.welcome} alt ='header img' className='welcome__img' />
      </div>
    
  </div>
);

export default Header;
