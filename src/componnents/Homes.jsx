import React, { useState } from 'react';
import portfolio from "../assets/Houssam_El_issioui.jpeg"
import { useSpring, animated } from 'react-spring';

import { motion } from 'framer-motion'


const Home = () => {

  const [isHovered, setIsHovered] = useState(false);
  const animationProps = useSpring({
    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
  });

  const moveVariants = {
    animation: {
      y: [0, -15],
      transition: {
        yoyo: Infinity,
        duration: 2,
        delay: 1
      }

    }
  }


  return (
    
    <motion.div className="container " id='home'
      initial={{ y: -15, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={
        {
          duration: 2,
          delay: 0.5
        }
      }
       onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="profile">
        <img src={portfolio} alt="portfolio" />
      </div>
      <div className="profile_text">
        <h3 className='name'>Hi, I'm <span>Houssam</span> </h3>
        <span className='job'> Developer Based on Morocco</span>
        <span className='text'>Learn more about my work <br /> and contact me.</span>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.1 }}
          variants={moveVariants}
          animate="animation"
        >
          Hire me</motion.a>
        <div
          className="web"

        >
          Web Developer
        </div>
        <div
          className="ui"
        >
          UI/UX Designer
        </div>
        <div
          className="freelance"
        >
          Ads Manager
        </div>
      </div>
    </motion.div>
    
  )
}

export default Home