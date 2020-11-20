import React from 'react';
import { motion } from 'framer-motion';

//Import context containers
import { Text } from '../containers/Language';

//Import animation variants
import {
  textVariants,
  containerVariants,
  subheadingVariants,
} from '../animation';

export default function ProjectsSectionSubheading() {
  return (
    <motion.div
      variants={containerVariants}
      className="flex my-5 mb-3 lg:mt-0 overflow-hidden"
    >
      <motion.h3
        variants={textVariants}
        className={`relative text-white z-20 blend-difference lg:text-5xl`}
      >
        <Text section="projectsSection" tid="header" />
      </motion.h3>
      <motion.div
        variants={subheadingVariants.rightToLeft}
        className={`absolute self-center mr-auto w-16 h-8 lg:h-12 bg-white`}
      />
    </motion.div>
  );
}
