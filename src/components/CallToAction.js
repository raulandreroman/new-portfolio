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
      className={`mx-8 min-h-12 md:w-9/12 md:m-auto lg:mt-8 my-4 lg:mb-0 lg:min-h-screen`}
    >
      <NavBarTools />
      <motion.div
        variants={containerVariants}
        animate="show"
        initial="hidden"
        className="flex flex-col w-10/12 lg:w-7/12 lg:mt-5 relative"
      >
        <div className="overflow-hidden mb-6 lg:text-7xl w-min">
          {/*CTA TITLE */}
          <motion.h1
            variants={textVariants}
            className={
              theme === 'light'
                ? ` text-light-secondary lg:text-7xl md:text-6xl block`
                : `  text-dark-secondary lg:text-7xl md:text-6xl block  `
            }
          >
            <Text section="CTASection" tid="header" />
          </motion.h1>
        </div>
        <div>
          <div className="overflow-hidden my-2 lg:text-5xl">
            {/*CTA CONTENT */}
            <motion.h2
              variants={textVariants}
              className={
                theme === 'light'
                  ? `text-light-primary my-2 md:text-4xl lg:text-5xl block `
                  : ` text-dark-primary my-2 md:text-4xl lg:text-5xl block`
              }
            >
              <Text section="CTASection" tid="content" />
            </motion.h2>
          </div>
          <div
            className={
              theme === 'light'
                ? `bg-light-secondary my-1 h-1 w-32 md:w-1/2 md:h-3 lg:w-1/2lg:h-3 mt-5`
                : `w-32 my-1 h-1 bg-dark-secondary mt-5 lg:h-2 lg:w-1/2 `
            }
          ></div>
        </div>
      </motion.div>
    </header>
  );
}
