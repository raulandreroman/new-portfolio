import React from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import Highlighter from 'react-highlight-words';
import { isBrowser } from 'react-device-detect';
import { paragraphContainer, strongWordsVariants } from '../../animation';

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

  //Words to highlight
  const strongWords = [
    'The Odin Project.',
    'Buenos Aires, Argentina.',
    'on my own.',
    'de manera autodidacta.',
    'formar parte de un equipo',
    'join a proactive, innovative team',
  ];

  const Highlight = ({ children, highlightIndex }) => (
    //Element to be rendered for highlighted words
    <motion.strong
      variants={strongWordsVariants}
      className={
        theme !== 'dark'
          ? 'bg-black text-white font-normal px-1 relative inline-block'
          : 'bg-white text-black font-normal px-1 relative inline-block'
      }
    >
      {children}
    </motion.strong>
  );

  //Checks if content has a subtitle and renders accordingly
  return !subtitle ? (
    <motion.p
      initial="hidden"
      animate="show"
      style={isBrowser ? { y: yDesktop } : { y }}
      variants={paragraphContainer}
      className={`text-${theme}-primary my-2 duration-700 lg:text-lg relative overflow-hidden`}
    >
      {
        <Highlighter
          highlightClassName="highlight"
          searchWords={strongWords}
          autoEscape={true}
          textToHighlight={text}
          highlightTag={Highlight}
          caseSensitive={true}
        />
      }
    </motion.p>
  ) : (
    <div>
      <motion.h4
        style={isBrowser ? { y: yDesktop } : { y }}
        className={`text-${theme}-primary mt-8 duration-700 lg:text-2xl `}
      >
        {subtitle}
      </motion.h4>
      <motion.p
        initial="hidden"
        animate="show"
        variants={paragraphContainer}
        style={isBrowser ? { y: yDesktop } : { y }}
        className={`text-${theme}-primary my-2 duration-700 lg:text-lg relative overflow-hidden`}
      >
        {
          <Highlighter
            highlightClassName="highlight"
            searchWords={strongWords}
            autoEscape={true}
            textToHighlight={text}
            highlightTag={Highlight}
          />
        }
      </motion.p>
    </div>
  );
}
