import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './Blogs.css'; // Ensure the CSS is imported

const Blogs = () => {
  const [liked, setLiked] = useState([false, false, false]);

  const toggleLike = (index) => {
    setLiked(prev => {
      const newLiked = [...prev];
      newLiked[index] = !newLiked[index];
      return newLiked;
    });
  };

  return (
    <div className="blogs-section">
      <h2 className="blogs-header">Stories and Promotion</h2>
      <div className="card-container">
        {['Blogs1.png', 'Blogs2.png', 'Blogs3.png'].map((img, index) => (
          <div className="card" key={index}>
            <img src={img} alt={`Blog ${index + 1}`} />
            <div className="card-content">
              <h3>Blog Title {index + 1}</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
              </p>
              <div className="actions">
                <FontAwesomeIcon
                  icon={faHeart}
                  className={`favorite ${liked[index] ? 'liked' : ''}`}
                  onClick={() => toggleLike(index)}
                />
                <a href="#" className="btn">
                  Read More
                  <FontAwesomeIcon icon={faChevronRight} className="arrow-icon" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
