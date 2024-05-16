import React from "react";

import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="g letter" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
        At The Local Craft Food, we are passionate about delivering farm-to-table freshness with every dish. Our menu features locally sourced ingredients, skillfully crafted into culinary masterpieces by our dedicated chefs. Join us for an unforgettable dining experience where every bite tells a story of flavor and tradition.</p>
        <button type="button" className="custom__button">Know More </button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
        </div>

        <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
        Founded in 2003, The Local Craft Food began with a vision to bring the community together through exceptional food and a warm, inviting atmosphere. Over the years, we've stayed true to our roots, focusing on sustainable practices and supporting local farmers. Our journey is a testament to our commitment to quality, tradition, and innovation in every plate we serve.</p>
        <button type="button" className="custom__button">Know More </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
