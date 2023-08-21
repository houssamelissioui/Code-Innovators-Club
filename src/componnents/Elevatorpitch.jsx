import React, { useState }  from 'react'
import { motion } from 'framer-motion'
import ReactPlayer from 'react-player/youtube';

function Elevatorpitch() {
      const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div className="container " id='pitch'
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
        <motion.div
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}} 
        className="title"
      >
            
            <h2 >Elevator pitch</h2>
      </motion.div>

      <div className='pitch-container'>
        <div className='container'>
            <div className="elevator-pitch-video">
        <ReactPlayer
          url="https://youtube.com/shorts/8Svom4q0wiE?feature=share"
          width="100%"
          height="100%"
          controls={true}
        />
      </div>
      
        </div>

      </div>

        </motion.div>
  )
}

export default Elevatorpitch