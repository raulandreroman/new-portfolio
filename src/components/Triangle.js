import React, { useContext } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import useScroll from './useScroll';
import { isBrowser } from 'react-device-detect';
//Import theme context
import { ThemeContext } from '../containers/ThemeContext';
//Import animation variants
import { containerVariants } from '../animation';

export default function Triangle() {
  const { theme } = useContext(ThemeContext);

  //Setup for scroll animation
  const { scrollYProgress } = useViewportScroll();
  const [element, controls] = useScroll(0.65);
  const y = useTransform(scrollYProgress, [0, 0.9, 0.95, 1], [0, -75, -25, 0]);
  const yDesktop = useTransform(scrollYProgress, [0, 0.85, 0.97], [0, -95, 0]);

  return (
    <>
      {theme === 'dark' && (
        <>
          <div className=" w-48 h-1 relative z-10 m-auto bg-black"></div>
        </>
      )}
      <div
        className={` w-48 h-1 relative z-10 m-auto top-2 bg-${theme}-bg`}
      ></div>
      <div
        className={` w-48 h-1 relative z-10 m-auto top-4 bg-${theme}-bg`}
      ></div>
      <motion.div
        initial="hidden"
        animate={controls}
        ref={element}
        style={isBrowser ? { y: yDesktop } : { y }}
        variants={containerVariants}
        className="w-0 h-0 triangle m-auto relative bottom-10 blend-difference duration-700"
      ></motion.div>
    </>
  );
}
