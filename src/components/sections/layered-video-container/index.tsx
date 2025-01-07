'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useInView, type MotionProps } from "framer-motion";

const LayeredAnimationContainer: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef as React.RefObject<HTMLElement>, { once: false, amount: 0.3 });
  const [shouldAnimate, setShouldAnimate] = useState(false);

  type MotionDivProps = MotionProps & React.HTMLAttributes<HTMLDivElement>
  const MotionDiv = motion.div as React.FC<MotionDivProps>

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldAnimate(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const animationVariants = {
    initial: { 
      opacity: 1,
      transform: 'perspective(10px) rotateX(5deg) translateY(-20%) scale(0.9)',
    },
    animate: { 
      opacity: 1,
      transform: 'perspective(1000px) rotateX(0deg) translateY(0%) scale(1)',
      transition: {
        type: "spring",
        stiffness: 30,
        damping: 12,
        mass: 1,
        duration: 1.5
      }
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!isInView || window.innerWidth < 768) return; // Disable mouse move effect on mobile/tablet

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
      className="relative min-h-[50vh] md:min-h-[70vh] lg:min-h-screen w-full overflow-hidden"
      ref={containerRef}
    >
      {/* Split Background */}
      <div className="absolute inset-0">
        <div className="h-1/2 bg-transparent" />
        <div className="h-1/2 bg-gray-100" />
      </div>

      {/* Content Container */}
      <div 
        className="relative w-full max-w-[95vw] md:max-w-[90vw] mx-auto h-[50vh] md:h-[70vh] lg:h-screen flex items-center justify-center"
        style={{
          perspective: "1000px",
          perspectiveOrigin: "center bottom"
        }}
      >
        {/* Animation Wrapper for 3D space */}
        <div
          className="relative w-full md:w-[90%] max-w-5xl px-4 md:px-0"
          style={{
            transformStyle: "preserve-3d",
            perspective: "1000px",
            perspectiveOrigin: "center bottom"
          }}
        >
          {/* Main animation container */}
          <MotionDiv
            className="relative w-full aspect-video md:aspect-[16/9] bg-white rounded-xl shadow-2xl overflow-hidden"
            variants={animationVariants}
            initial="initial"
            animate={shouldAnimate && isInView ? "animate" : "initial"}
            style={{
              transformOrigin: "center bottom",
              transformStyle: "preserve-3d",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="relative w-full h-full">
              <Image 
                src="/video/srotas.webp"
                alt="Srotas Demo"
                fill
                className="object-contain"
                priority
                unoptimized
                sizes="(max-width: 768px) 95vw,
                       (max-width: 1200px) 90vw,
                       1200px"
              />
            </div>
          </MotionDiv>
        </div>
      </div>
    </div>
  );
};

export default LayeredAnimationContainer;