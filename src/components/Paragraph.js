import React from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { isBrowser } from 'react-device-detect';

export default function Paragraph(props) {
  const { content, theme } = props;

  //Scroll animations settings
  const { scrollYProgress } = useViewportScroll();
  const y = useTransform(scrollYProgress, [0, 0.2, 0.35], [0, -30, -50]);
  const yDesktop = useTransform(
    scrollYProgress,
    [0, 0.35, 0.45],
    [0, -145, -200]
  );

  const { text, subtitle } = content;

  //Checks if content has a subtitle and renders accordingly
  return !subtitle ? (
    <motion.p
      style={isBrowser ? { y: yDesktop } : { y }}
      className={`text-${theme}-primary my-2 duration-700 lg:text-lg`}
    >
      {text}
    </motion.p>
  ) : (
    <div>
      <motion.h4
        style={isBrowser ? { y: yDesktop } : { y }}
        className={`text-${theme}-secondary mt-8 duration-700 lg:text-2xl `}
      >
        {subtitle}
      </motion.h4>
      <motion.p
        style={isBrowser ? { y: yDesktop } : { y }}
        className={`text-${theme}-primary my-2 duration-700 lg:text-lg`}
      >
        {text}
      </motion.p>
    </div>
  );
}
