import React, { useContext } from 'react';
import { motion } from 'framer-motion';

//Import contexts
import { ThemeContext } from '../containers/ThemeContext';
import { Text } from '../containers/Language';

//Import components
import NavBarTools from './NavBarTools';
//Import animations
import { textVariants, containerVariants } from '../animation';

export default function CallToAction() {
  const { theme } = useContext(ThemeContext);

  return (
    <header
      className={`mx-8 lg:mx-48 mx lg:mt-8 my-4 lg:mb-0 lg:min-h-screen min-h-12   `}
    >
      <NavBarTools />
      <motion.div
        variants={containerVariants}
        animate="show"
        initial="hidden"
        className="flex flex-col w-10/12 lg:w-7/12 lg:mt-5 relative"
      >
        <div className="overflow-hidden mb-6 lg:text-7xl w-min">
          <motion.h1
            variants={textVariants}
            className={
              theme === 'light'
                ? ` text-light-secondary lg:text-7xl block`
                : `  text-dark-secondary lg:text-7xl block  `
            }
          >
            <Text section="CTASection" tid="header" />
          </motion.h1>
        </div>
        <div>
          <div className="overflow-hidden my-2 lg:text-5xl">
            <motion.h2
              variants={textVariants}
              className={
                theme === 'light'
                  ? `text-light-primary my-2 lg:text-5xl block `
                  : ` text-dark-primary my-2 lg:text-5xl block`
              }
            >
              <Text section="CTASection" tid="content" />
            </motion.h2>
          </div>
          <div
            className={
              theme === 'light'
                ? `bg-light-secondary w-32 lg:w-1/2 my-1 h-1 lg:h-3 mt-5`
                : `w-32 lg:w-1/2 my-1 h-1 lg:h-2 bg-dark-secondary mt-5 `
            }
          ></div>
        </div>
      </motion.div>
    </header>
  );
}
