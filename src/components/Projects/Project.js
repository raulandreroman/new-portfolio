import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { isBrowser, isMobile } from "react-device-detect";
//Import components
import TechStack from "./TechStack";
import Preview from "./Preview";
//Import text context
import { Text } from "../../containers/Language";
import projectData from "../../data/projects.json";

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
    [0, 0.47, 0.62, 0.85, 1],
    [0, -130, -175, -280, -330]
  );

  return (
    <motion.div
      style={isBrowser ? { y: yDesktop } : { y }}
      className={
        //Removes margin bottom on last rendered project
        i === projectData.length - 1
          ? "flex flex-col mt-12 duration-700 md:flex-col md:m-0 lg:mt-16 lg:w-7/12 lg:m-auto lg:flex-row"
          : "flex flex-col my-12 duration-700 md:flex-col md:m-0 lg:mt-16 lg:w-7/12 lg:m-auto lg:flex-row lg:mb-32 "
      }
    >
      <div
        className={`flex flex-col mb-4 md:w-3/5 md:m-auto md:mt-20 lg:w-10/12 lg:flex-shrink-0 lg:mt-0 lg:mr-12 lg:mb-0`}
      >
        {isMobile && <h4 className={"text-white ml-2 font-normal"}>{title}</h4>}
        <button
          aria-label="Visit project's website"
          className="my-2"
          onClick={() => handleClick(secondLink)}
        >
          <Preview previewUrl={previewUrl} />
        </button>

        <div
          className={
            "flex justify-center w-full max-w-sm self-center lg:max-w-none"
          }
        >
          <a
            aria-label="Visit repository on GitHub"
            href={firstLink}
            target="_blank"
            rel="noreferrer"
            className={
              "w-auto flex-grow h-8 bg-white mx-2 max flex flex-col justify-center items-center lg:w-24 lg:h-8 lg:flex-grow-0"
            }
          >
            <Text section="projectsSection" tid="btn1" />
          </a>
          <a
            aria-label="Visit project's website"
            href={secondLink}
            target="_blank"
            rel="noreferrer"
            className={
              "w-auto flex-grow h-8 bg-white mx-2 max flex flex-col justify-center items-center lg:w-24 lg:h-8 lg:flex-grow-0 "
            }
          >
            <Text section="projectsSection" tid="btn2" />
          </a>
        </div>
        <div
          className={`relative self-center w-48 h-2 mt-2 bg-white lg:ml-2 lg:w-40`}
        />
      </div>
      <div className="flex flex-col items-start flex-shrink-0 md:w-4/6 md:m-auto md:mt-8 lg:mt-0 lg:w-7/12">
        {!isMobile && (
          <h4
            className={
              "text-white mb-3 font-normal lg:self-start lg:mt-3 lg:mb-0"
            }
          >
            {title}
          </h4>
        )}
        <p className={"text-white text-lg font-light"}>{summary}</p>
        <TechStack content={techStack} />
      </div>
    </motion.div>
  );
}
