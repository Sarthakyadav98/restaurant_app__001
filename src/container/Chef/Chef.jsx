import React from "react";

import { SubHeading } from "../../Components";
import { images } from "../../constants";
import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">What We Believe In</h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans"> At The Local Craft Food, we believe in the power of fresh, locally sourced ingredients to create unforgettable culinary experiences.</p>
        </div>
      <p className="p__opensans"> Our commitment to sustainability and quality drives us to innovate while honoring traditional techniques. Every dish we serve is a reflection of our passion for excellence and our dedication to delighting our guests with the finest flavors.</p>
      </div>
      <div className="app__chef-sign"><p>Kevin Luo</p>
      <p className="p__opensans">Chef &Founder</p>
      <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
