import React, { useContext } from 'react';
import { motion } from 'framer-motion';

//Import context containers
import { Text } from '../containers/Language';
import { ThemeContext } from '../containers/ThemeContext';
import useScroll from './useScroll';

//import components
import AboutSubheading from './AboutSubheading';
import Paragraph from './Paragraph';

//Import animations
import { containerVariants } from '../animation';

export default function About() {
  const { theme } = useContext(ThemeContext);
  const [element, controls] = useScroll();

  //Gets text content

  const sectionContent = Text({ section: 'aboutSection' });
  return (
    <motion.section
      initial="hidden"
      animate={controls}
      ref={element}
      variants={containerVariants.subheading}
      className="flex flex-col mx-8 my-4 mt-7 lg:mx-48 lg:mt-0"
    >
      <AboutSubheading />
      <div className="lg:mx-56 max-w-1xl flex flex-col my-4 lg:mb-16">
        {sectionContent.content.map((item, key) => {
          const { paragraph } = item;

          return <Paragraph theme={theme} content={paragraph} key={key} />;
        })}
      </div>
    </motion.section>
  );
}
