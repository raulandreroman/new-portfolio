import React, { useContext } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import useScroll from '../useScroll';

//Import context containers
import { Text } from '../../containers/Language';
import { ThemeContext } from '../../containers/ThemeContext';

//Import components
import Subheading from './Subheading';
import Paragraph from './Paragraph';

//Import animation variants
import { containerVariants } from '../../animation';

export default function About() {
  const { theme } = useContext(ThemeContext);
  const [element, controls] = useScroll();

  interface ISectionContent {
    content: {
      paragraph: {
        text: string;
        subtitle?: string;
      };
    }[];
  }

  //Gets text content
  const sectionContent: ISectionContent = Text({ section: 'aboutSection' });

  return (
    <AnimatePresence>
      <motion.section
        exit="hidden"
        initial="hidden"
        animate={controls}
        ref={element}
        variants={containerVariants}
        className={`flex flex-col mx-8 my-4 mt-7 bg-${theme}-bg duration-700 md:w-9/12 md:m-auto`}
      >
        <Subheading />
        <div className="flex flex-col my-4 md:m-auto md:mt-12 lg:mb-0 lg:w-7/12">
          {sectionContent.content.map((item, key) => {
            const { paragraph } = item;

            return <Paragraph theme={theme} content={paragraph} key={key} />;
          })}
        </div>
      </motion.section>
    </AnimatePresence>
  );
}
