'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, type MotionProps } from "framer-motion";

const LayeredVideoContainer: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef as React.RefObject<HTMLElement>, { once: false, amount: 0.3 });
  const [shouldAnimate, setShouldAnimate] = useState(false);
  // Define types for different HTML elements with motion props
type MotionDivProps = MotionProps & React.HTMLAttributes<HTMLDivElement>

// Export typed motion components
 const MotionDiv = motion.div as React.FC<MotionDivProps>

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldAnimate(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const videoVariants = {
    initial: { 
      opacity: 1,
      transform: 'perspective(1000px) rotateX(85deg) translateY(-20%) scale(0.9)',
    },
    animate: { 
      opacity: 1,
      transform: 'perspective(1000px) rotateX(0deg) translateY(0%) scale(1)',
      transition: {
        type: "spring",
        stiffness: 30,
        damping: 20,
        mass: 1,
        duration: 1.5
      }
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!isInView) return;

    const bounds = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - bounds.left;
    const mouseY = e.clientY - bounds.top;
    const centerX = bounds.width / 2;
    const centerY = bounds.height / 2;
    const moveX = (mouseX - centerX) / 30;
    const moveY = (mouseY - centerY) / 30;

    e.currentTarget.style.transform = `
      perspective(1000px) 
      rotateX(${moveY * 0.1}deg) 
      rotateY(${moveX * 0.1}deg) 
      translateX(${moveX * 0.5}px) 
      translateY(${moveY * 0.5}px)
    `;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
  };

  return (
    <div 
      className="relative min-h-screen w-full overflow-hidden"
      ref={containerRef}
    >
      {/* Split Background */}
      <div className="absolute inset-0">
        <div className="h-1/2 bg-[#120F24]" />
        <div className="h-1/2 bg-gray-100" />
      </div>

      {/* Content Container */}
      <div 
        className="relative w-full max-w-[90vw] mx-auto h-screen flex items-center justify-center"
        style={{
          perspective: "1000px",
          perspectiveOrigin: "center bottom"
        }}
      >
        {/* Video Wrapper for 3D space */}
        <div
          className="relative w-[90%] max-w-5xl"
          style={{
            transformStyle: "preserve-3d",
            perspective: "1000px",
            perspectiveOrigin: "center bottom"
          }}
        >
          {/* Main video container */}
          <MotionDiv
            className="relative w-full aspect-[16/9] bg-white rounded-xl shadow-2xl overflow-hidden"
            variants={videoVariants}
            initial="initial"
            animate={shouldAnimate && isInView ? "animate" : "initial"}
            style={{
              transformOrigin: "center bottom",
              transformStyle: "preserve-3d",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <video 
              className="w-full h-full object-cover"
              autoPlay 
              loop 
              muted 
              playsInline
            >
              <source src="/video/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </MotionDiv>
        </div>
      </div>
    </div>
  );
};

export default LayeredVideoContainer;
