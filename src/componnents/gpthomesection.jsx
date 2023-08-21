import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

function HomeSection() {
  const [isHovered, setIsHovered] = useState(false);
  const animationProps = useSpring({
    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
  });

  return (
    <div
      className="home-section"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
        
      <animated.div style={animationProps}>
        <h1>Welcome to my Portfolio!</h1>
        <p>Here you can learn more about my work and contact me.</p>
      </animated.div>
    </div>
  );
}

export default HomeSection;

