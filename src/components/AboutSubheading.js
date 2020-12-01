import React, { useContext } from 'react';
import { motion } from 'framer-motion';

//Import context containers
import { Text } from '../containers/Language';
import { ThemeContext } from '../containers/ThemeContext';

//Import animation variants
import {
  textVariants,
  containerVariants,
  subheadingVariants,
} from '../animation';

export default function AboutSubheading() {
  const { theme } = useContext(ThemeContext);

  //Makes a deep copy of the text animations object
  const themedTextAnimations = JSON.parse(JSON.stringify(textVariants));

  //Changes the text color when hidden for dark mode
  themedTextAnimations.hidden.color = 'white';

  return (
    <motion.div
      variants={containerVariants}
      className={`flex my-5 mb-3 lg:mt-0 overflow-hidden bg-${theme}-bg duration-700`}
    >
      {theme !== 'dark' ? (
        <motion.h3
          variants={textVariants}
          className={`relative text-white z-20 blend-difference md:text-4xl lg:text-5xl`}
        >
          <Text tid="header" section="aboutSection" />
        </motion.h3>
      ) : (
        <motion.h3
          variants={themedTextAnimations}
          className={`relative text-white z-20 blend-difference lg:text-5xl`}
        >
          <Text tid="header" section="aboutSection" />
        </motion.h3>
      )}
      <motion.div
        variants={subheadingVariants.leftToRight}
        className={`relative self-end right-8 lg:right-13 w-16 h-8 lg:h-12 bg-${theme}-secondary `}
      />
    </motion.div>
  );
}
