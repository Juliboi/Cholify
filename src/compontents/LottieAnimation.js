import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

export const LottieAnimation = ({ url }) => {
  const container = useRef();

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current, // the dom element that will contain the animation
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: url, // the path to the animation json
      // path: './images/animations/food-bowl.json', // the path to the animation json
    });
  }, [url]);
  return <div ref={container} className='lottie-animation'></div>;
};
