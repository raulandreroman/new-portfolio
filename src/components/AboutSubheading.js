import React, { useContext } from 'react';
import { motion } from 'framer-motion';

//Import context containers
import { Text } from '../containers/Language';
import { ThemeContext } from '../containers/ThemeContext';

//Import animations
import {
  textAnimations,
  containerVariants,
  subheadingAnimations,
} from '../animation';

export default function AboutSubheading() {
  const { theme } = useContext(ThemeContext);
  return (
    <motion.div
      variants={containerVariants.subheading}
      className="flex my-5 mb-3 lg:mt-0 overflow-hidden"
    >
      <motion.h3
        variants={textAnimations.subheading}
        className={`relative text-white z-20 blend-difference lg:text-5xl`}
      >
        <Text tid="header" section="aboutSection" />
      </motion.h3>
      <motion.div
        variants={subheadingAnimations.leftToRight}
        className={`relative self-end right-8 lg:right-13 w-16 h-8 lg:h-12 bg-${theme}-secondary `}
      />
    </motion.div>
  );
}
