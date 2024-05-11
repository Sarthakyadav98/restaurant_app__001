import React from "react";

import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";
import { SubHeading } from "../../Components";
import { images} from "../../constants";
import "./Gallery.css";

const Gallery = () => {
  const scrollRef = React.useRef(null);
  const scroll = (direction) => {
    const {current} = scrollRef;
    if(direction === 'left'){
      current.scrollLeft -= 300;
    }
    else{
      current.scrollLeft += 300;
    }
  };

  const galleryImages =[images.gallery01,images.gallery02,images.gallery03,images.gallery04]

  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style ={{color:'#AAA', marginTop:'2rem'}}>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat.</p>  
        <button type="button" className="custom__button" >View More</button>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container">
          {galleryImages.map((image, index) => (<div className="app__gallery-images_card flex__center" key={`gallery_image-${index+1}`}> 
          <img src={image} alt="gallery_image"/>
          <BsInstagram className="gallery__instagram-icon"/>

          </div>))}
         </div>
        <div className="app__gallery-images_arrow">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={()=>scroll('left')}/>
          <BsArrowRightShort className="gallery__arrow-icon" onClick={()=>scroll('right')}/>
        </div>
      </div>

    </div>
  );
}

export default Gallery;
