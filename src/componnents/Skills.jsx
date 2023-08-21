import React, { useState } from 'react'

import { icons } from '../Data';
import { experiences } from '../Data';
import { certification } from '../Data';
import { motion } from 'framer-motion';
const Skills = () => {
  const [active, setActive] = useState(1)
  return (
    <div className="container" id="skills">
      <motion.div
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}}  
        className="title"
      >
        
        <h2>Skills And Experience</h2>
      </motion.div>
      <motion.div
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}}
        className="select"
      >
        <button
          onClick={() => setActive(1)}
          className={active === 1 ? "active" : ""}>Skills</button>
        <button
          onClick={() => setActive(2)}
          className={active === 2 ? "active" : ""}
        >Experiences</button>
        <button
          onClick={() => setActive(3)}
          className={active === 3 ? "active" : ""}
        >Certification</button>
      </motion.div>
      <motion.div
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}}
        className="skills"
      >
        {active === 1 && icons.map((icon, index) => {
          return (
            <div key={index} className="tools" >
              {icon}
            </div>
          )
        })}
      </motion.div>
      <motion.div
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}}
        className="experiencs"
      >
        {active === 2 && experiences.map(experience => {
          return (
            <div className="experience" key={experience.id}>
              <span>{experience.year}</span>
              <div className="position">
                <h3>{experience.position}</h3>
                <p>{experience.company}</p>
              </div>
            </div>
          )
        })}
        </motion.div>
        <motion.div
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}}
        className="experiencs"
      >
        {active === 3 && certification.map((certification) => {
          return (
           <div className="experience" key={certification.id}>
              <span>{certification.year}</span>
              <div className="position">
                <h3>{certification.position}</h3>
                
              </div>
            </div>
          )
        })}
      </motion.div>
      
    </div>
  )
}

export default Skills