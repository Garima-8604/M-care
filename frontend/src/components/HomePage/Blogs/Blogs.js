import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import styles from './Blogs.module.css';

const Blogs = () => {
  const [liked, setLiked] = useState([false, false, false]); // Track the liked state of each card

  const toggleLike = (index) => {
    setLiked(prev => {
      const newLiked = [...prev];
      newLiked[index] = !newLiked[index];
      return newLiked;
    });
  };

  return (
    <div className={styles.section}>
        <h2>Blogs and Articles</h2>
        <div className={styles.cardContainer}>
      <div className={styles.card}>
        <img src="Blogs1.png" alt="hi" />
        <div className={styles.cardContent}>
          <h3>Card 1</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi laudantium voluptate ad nesciunt officia amet tempore fugiat, accusantium quos beatae quasi ut non deserunt vitae doloribus consequatur esse dolorum voluptatem!</p>
          <div className={styles.actions}>
            <FontAwesomeIcon
              icon={faHeart}
              className={`${styles.favorite} ${liked[0] ? styles.liked : ''}`}
              onClick={() => toggleLike(0)}
            />
            <a href="#" className={styles.btn}>
              Read More
              <FontAwesomeIcon icon={faChevronRight} className={styles.arrowIcon} />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.card}>
        <img src="Blogs2.png" alt="hi" />
        <div className={styles.cardContent}>
          <h3>Card 2</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi laudantium voluptate ad nesciunt officia amet tempore fugiat, accusantium quos beatae quasi ut non deserunt vitae doloribus consequatur esse dolorum voluptatem!</p>
          <div className={styles.actions}>
            <FontAwesomeIcon
              icon={faHeart}
              className={`${styles.favorite} ${liked[1] ? styles.liked : ''}`}
              onClick={() => toggleLike(1)}
            />
            <a href="#" className={styles.btn}>
              Read More
              <FontAwesomeIcon icon={faChevronRight} className={styles.arrowIcon} />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.card}>
        <img src="Blogs3.png" alt="hi" />
        <div className={styles.cardContent}>
          <h3>Card 3</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi laudantium voluptate ad nesciunt officia amet tempore fugiat, accusantium quos beatae quasi ut non deserunt vitae doloribus consequatur esse dolorum voluptatem!</p>
          <div className={styles.actions}>
            <FontAwesomeIcon
              icon={faHeart}
              className={`${styles.favorite} ${liked[2] ? styles.liked : ''}`}
              onClick={() => toggleLike(2)}
            />
            <a href="#" className={styles.btn}>
              Read More
              <FontAwesomeIcon icon={faChevronRight} className={styles.arrowIcon} />
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default Blogs;
