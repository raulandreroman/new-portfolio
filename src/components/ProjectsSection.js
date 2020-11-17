import React from 'react';
import projectData from '../data/projects.json';
import Project from './Project';

import { Text } from '../containers/Language';

export default function ProjectsSection(props) {
  const projectsContent = Text({ section: 'projectsSection' });

  const textContent = projectsContent.projects;

  const projects = projectData.map((project, i) => {
    //Adds text content to projects data
    project.summary = textContent[i].summary;
    project.title = textContent[i].name;
    return project;
  });

  return (
    <div
      className={`bg-black px-8 py-4 pb-24 mt-7 flex flex-col lg:px-48 lg:py-16`}
    >
      <div className="flex my-5 mb-3 lg:mt-0">
        <h3 className={`relative text-white z-20 blend-difference lg:text-5xl`}>
          <Text section="projectsSection" tid="header" />
        </h3>
        <div
          className={`absolute self-center mr-auto w-16 h-8 lg:h-12 bg-white`}
        />
      </div>
      {projects.map((project, key) => {
        return (
          <Project
            details={project}
            key={key}
            handleClick={props.handleClick}
          />
        );
      })}
    </div>
  );
}
