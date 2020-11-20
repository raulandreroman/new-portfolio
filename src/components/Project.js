import React from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { isBrowser } from 'react-device-detect';
//Import components
import TechStack from './TechStack';
import Preview from './Preview';
//Import text context
import { Text } from '../containers/Language';
import projectData from '../data/projects.json';

export default function Project(props) {
  const {
    title,
    summary,
    firstLink,
    secondLink,
    techStack,
    previewUrl,
  } = props.details;

  const { handleClick, i } = props;

  //Setup for scroll animation
  const { scrollYProgress } = useViewportScroll();
  const y = useTransform(scrollYProgress, [0, 0.47, 0.57], [0, -50, -90]);
  const yDesktop = useTransform(
    scrollYProgress,
    [0, 0.47, 0.62, 0.85],
    [0, -50, -125, -250]
  );

  return (
    <motion.div
      style={isBrowser ? { y: yDesktop } : { y }}
      className={
        //Removes margin bottom on last rendered project
        i === projectData.length - 1
          ? 'flex flex-col mt-12 lg:flex-row'
          : 'flex flex-col my-12 lg:flex-row lg:mb-32'
      }
    >
      <div className={`flex flex-col mb-4 lg:ml-64 lg:w-6/12 lg:mr-12 lg:mb-0`}>
        <button className="my-2" onClick={() => handleClick(secondLink)}>
          <Preview previewUrl={previewUrl} />
        </button>

        <div
          className={
            'flex justify-center w-full max-w-sm self-center lg:max-w-none'
          }
        >
          <button
            onClick={() => handleClick(firstLink)}
            className={
              'w-auto flex-grow h-8 bg-white mx-2 lg:w-24 lg:h-8 lg:flex-grow-0 max'
            }
          >
            <span>
              <Text section="projectsSection" tid="btn1" />
            </span>
          </button>
          <button
            onClick={() => handleClick(secondLink)}
            className={
              'w-auto flex-grow h-8 bg-white mx-2 lg:w-24 lg:h-8 lg:flex-grow-0'
            }
          >
            <span>
              <Text section="projectsSection" tid="btn2" />
            </span>
          </button>
        </div>
        <div
          className={`relative self-center w-48 h-2 mt-2 bg-white lg:ml-2 lg:w-40`}
        />
      </div>
      <div className="flex flex-col items-start flex-shrink-0 lg:w-1/4">
        <h4
          className={
            'text-white mb-3 font-normal lg:self-start lg:mt-3 lg:mb-0'
          }
        >
          {title}
        </h4>
        <p className={'text-white text-lg font-light'}>{summary}</p>
        <TechStack content={techStack} />
      </div>
    </motion.div>
  );
}
