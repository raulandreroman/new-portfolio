import React from 'react';
import { motion } from 'framer-motion';
import useScroll from './useScroll';

//Import contexts
import { Text } from '../containers/Language';
import { ThemeContext } from '../containers/ThemeContext';

//Import animation variants
import { containerVariants } from '../animation';

export default function Contact(props) {
  const [element, controls] = useScroll(0.85);

  const { theme } = React.useContext(ThemeContext);
  const { handleClick } = props;
  return (
    <motion.section
      ref={element}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="flex flex-col mb-20 items-center  "
    >
      <p className={`text-${theme}-secondary text-3xl align-text-center`}>
        <Text section="contactSection" tid="content" />
      </p>
      <button
        onClick={() => handleClick('email')}
        className={
          theme === 'light'
            ? `bg-light-bg border border-light-secondary border-solid my-8 mx-6 p-3 mt-3`
            : 'bg-dark-bg border border-dark-secondary border-solid my-8 mx-6 p-3 mt-3'
        }
      >
        <span
          className={
            theme === 'light'
              ? `text-light-secondary text-2xl font-light`
              : 'text-dark-secondary text-2xl font-light'
          }
        >
          <Text section="contactSection" tid="btn" />
        </span>
      </button>
    </motion.section>
  );
}
