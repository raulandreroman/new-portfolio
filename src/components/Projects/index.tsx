import React from 'react';
import { motion } from 'framer-motion';

import projectData from '../../data/projects.json';
import Subheading from './Subheading';
import Project from './Project';
import useScroll from '../useScroll';

import { Text } from '../../containers/Language';

//Import animations
import { containerVariants } from '../../animation';

interface Props {
  handleClick: (url?: string) => void;
}

const ProjectsSection = (props: Props) => {
  const { handleClick } = props;
  const projectsContent = Text({ section: 'projectsSection' });
  const threshold = [0.07, 0];
  const [element, controls] = useScroll(threshold);

  const textContent = projectsContent.projects;

  interface IProject {
    title: string;
    firstLink: string;
    secondLink: string;
    summary?: string;
    techStack: {
      markupAndComponents: string[];
      styling: string[];
      utils: string[];
    };
    previewUrl: {
      mobile: string;
      desktop: string;
    };
  }

  const projects: IProject[] = projectData.map((project: IProject, i) => {
    //Adds text content to projects data
    project.summary = textContent[i].summary;
    project.title = textContent[i].name;
    return project;
  });

  return (
    <motion.section
      initial="hidden"
      animate={controls}
      ref={element}
      variants={containerVariants}
      className={`bg-black px-8 py-4 pb-24 mt-7 flex flex-col`}
    >
      <div className="md:w-auto md:m-0 lg:w-3/4 lg:m-auto">
        <Subheading />
        {projects.map((project, key) => {
          return (
            <Project
              details={project}
              i={key}
              key={key}
              handleClick={handleClick}
            />
          );
        })}
      </div>
    </motion.section>
  );
};

export default ProjectsSection;
