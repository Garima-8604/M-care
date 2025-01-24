import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './HorizontalScrollSection.css';

const HorizontalScrollSection = () => {
  // References for the scroll containers
  const scrollContainerRef1 = useRef(null);
  const scrollContainerRef2 = useRef(null);

  // Handle the click event for scrolling the first section
  const handleScrollRight1 = () => {
    if (scrollContainerRef1.current) {
      scrollContainerRef1.current.scrollBy({
        left: 200 + 200, // width of image + gap between images
        behavior: 'smooth', // Smooth scrolling
      });
    }
  };

  // Handle the click event for scrolling the second section
  const handleScrollRight2 = () => {
    if (scrollContainerRef2.current) {
      scrollContainerRef2.current.scrollBy({
        left: 200 + 200, // width of image + gap between images
        behavior: 'smooth',
      });
    }
  };

  return (
    <><div className="scroll-section">
      {/* First Horizontal Scroller */}
      <div className="specialist-text">Specialist</div>

      <div className="scroll-container" ref={scrollContainerRef1}>
        <div className="scroll-item">
          <img src="pregnancy.png" alt="image1" />
          <div className="image-text">Pregnancy</div>
        </div>
        <div className="scroll-item">
          <img src="gynec.png" alt="image2" />
          <div className="image-text">Gynecology</div>
        </div>
        <div className="scroll-item">
          <img src="fetal.png" alt="image3" />
          <div className="image-text">Maternal-fetal</div>
        </div>
        <div className="scroll-item">
          <img src="fertility.png" alt="image4" />
          <div className="image-text">Fertility</div>
        </div>
        <div className="scroll-item">
          <img src="pregnancy.jpg" alt="image5" />
          <div className="image-text">Fertility</div>
        </div>
        <div className="scroll-item">
          <img src="pregnancy.jpg" alt="image6" />
          <div className="image-text">Fertility</div>
        </div>
      </div>

      {/* Scroll arrow button for first section */}
      <button className="scroll-arrow" onClick={handleScrollRight1}>
        <FontAwesomeIcon
          icon={faChevronRight}
          style={{ fontSize: '60px', color: '#DE1B51' }} // Arrow style
        />
      </button>
    </div>
    <div><div className="scroll-section">
        {/* Second Horizontal Scroller */}
        <div className="specialist-text">Services</div>

        <div className="scroll-container" ref={scrollContainerRef2}>
          <div className="scroll-item">
            <img src="phub.png" alt="image1" />
            <div className="image-text">Nearest iP-hub</div>
          </div>
          <div className="scroll-item">
            <img src="appoint.png" alt="image2" />
            <div className="image-text">Appointments</div>
          </div>
          <div className="scroll-item">
            <img src="ambulance.png" alt="image3" />
            <div className="image-text">Ambulance / Pick-up request</div>
          </div>
          <div className="scroll-item">
            <img src="nanny.png" alt="image4" />
            <div className="image-text">P - Nanny</div>
          </div>
          <div className="scroll-item">
            <img src="community.png" alt="image5" />
            <div className="image-text">Community Guidance</div>
          </div>
          <div className="scroll-item">
            <img src="lab.png" alt="image6" />
            <div className="image-text">Laboratory Testing</div>
          </div>
        </div>

        {/* Scroll arrow button for second section */}
        <button className="scroll-arrow" onClick={handleScrollRight2}>
          <FontAwesomeIcon
            icon={faChevronRight}
            style={{ fontSize: '60px', color: '#DE1B51' }} // Arrow style
          />
        </button></div>
      </div></>
  );
};

export default HorizontalScrollSection;
