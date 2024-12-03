import React, { useState } from 'react';
import portfolio from "../assets/LOGONAJD.png"
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
         
      </div>
      <div className="profile_text">
        <h3 className='name'> <span>Code Innovators Club (CIC)</span> </h3>
        <span className='job'>  </span>
        <span className='text'>Rejoindre notre Club passionnée<br /> par les Technologies d'informations. 🖥️🖨️🔧.</span>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.1 }}
          variants={moveVariants}
          animate="animation"
        >
          Passer au Questionnaire</motion.a>
        <div
          className="web"

        >
          Langage de programmation
        </div>
        <div
          className="ui"
        >
          Analyse de données
        </div>
        <div
          className="freelance"
        >
          Création Digital
        </div>
      </div>
    </motion.div>
    
  )
}

export default Home