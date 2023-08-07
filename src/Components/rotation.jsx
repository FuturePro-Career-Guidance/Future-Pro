import React, { useState, useEffect } from 'react';
import { useParallax } from 'react-scroll-parallax';

const RotateComponent = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(rotation => (rotation + 1) % 360);
    }, 10); // Adjust the interval time as needed

    return () => {
      clearInterval(interval);
    };
  }, []);

  const parallax = useParallax<HTMLDivElement>({
    rotate: [rotation, rotation], // Use the current rotation value for both start and end angles
  });

  return (
    <div ref={parallax.ref} className="spinner">
      😵‍💫
      <div className="diamond">💎</div>
      <div className="clown">🤡</div>
      <div className="money">💰</div>
      <div className="hand">👌🏻</div>
    </div>
  );
};

export default RotateComponent;


