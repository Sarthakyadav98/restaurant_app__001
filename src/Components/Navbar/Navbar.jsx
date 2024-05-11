import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
  <nav className='app_navbar'>
    <div className='app_navbar_logo'>
      <img src={images.restaurant_logo} alt='App_logo' />
    </div>
    <ul className='app_navbar_links'>
      <li className='p__opensans'><a href='#home'>Home</a></li>
      <li className='p__opensans'><a href='#about'>About</a></li>
      <li className='p__opensans'><a href='#menu'>Menu</a></li>
      <li className='p__opensans'><a href='#awards'>Awards</a></li>
      <li className='p__opensans'><a href='#contact'>Contact</a></li>
     </ul>
     <div className='app_navbar_login'>
     <a href='#login' className='p__opensans'>Log In / Register</a>
      <div />
     <a href='/' className='p__opensans'>Book A Table </a>
     </div>
    {/* Here I go for the small screens */}
    <div className='app_navbar_hamburger'>
      <GiHamburgerMenu color ="#fff" fontSize={27} onClick={()=>setToggleMenu(true)} />
      
      {toggleMenu && (
      <div className='app_navbar_hamburger_overlay flex_center slide_top'>
        <MdOutlineRestaurantMenu color ="#fff" fontSize={27} className='overlay_close' onClick={()=>setToggleMenu(false)}/>
      <ul className='app_navbar_hamburger_links'>
      <li className='p__opensans'><a href='#about'>About</a></li>
      <li className='p__opensans'><a href='#menu'>Menu</a></li>
      <li className='p__opensans'><a href='#awards'>Awards</a></li>
      <li className='p__opensans'><a href='#home'>Home</a></li>
      <li className='p__opensans'><a href='#contact'>Contact</a></li>
     </ul>
      </div>
  )}
     </div> 
  </nav>
);}

export default Navbar;
