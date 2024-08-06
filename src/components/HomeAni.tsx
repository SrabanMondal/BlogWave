// components/LottieAnimation.js
import React from 'react';
import Lottie from 'react-lottie';
import animationData from './study.json';

const LottieAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return <Lottie options={defaultOptions} height={300} width={400} />;
};

export default LottieAnimation;
