import React, { useContext } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import useScroll from './useScroll';

//Import context containers
import { Text } from '../containers/Language';
import { ThemeContext } from '../containers/ThemeContext';

//Import components
import AboutSubheading from './AboutSubheading';
import Paragraph from './Paragraph';

//Import animation variants
import { containerVariants } from '../animation';

export default function About() {
  const { theme } = useContext(ThemeContext);
  const [element, controls] = useScroll();

  //Gets text content
  const sectionContent = Text({ section: 'aboutSection' });

  return (
    <AnimatePresence>
      <motion.section
        exit="hidden"
        initial="hidden"
        animate={controls}
        ref={element}
        variants={containerVariants}
        className={`flex flex-col mx-8 my-4 mt-7 lg:mx-48 lg:my-0 bg-${theme}-bg duration-700 lg:mb-0`}
      >
        <AboutSubheading />
        <div className="lg:mx-56 lg:ml-64  max-w-1xl flex flex-col my-4 lg:mb-0">
          {sectionContent.content.map((item, key) => {
            const { paragraph } = item;
            return <Paragraph theme={theme} content={paragraph} key={key} />;
          })}
        </div>
      </motion.section>
    </AnimatePresence>
  );
}
