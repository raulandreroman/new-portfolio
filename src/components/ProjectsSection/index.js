import React from 'react';
import projects from '../../data/projects.json';
import Project from '../Project';

export default function ProjectsSection(props) {
 

  return (
    <div
      className={`bg-black px-8 py-4 pb-24 mt-7 flex flex-col lg:px-48 lg:py-16`}
    >
      <div className="flex my-5 mb-3 lg:mt-0">
        <h3 className={`relative text-white z-20 blend-difference lg:text-5xl`}>Projects</h3>
        <div
          className={`relative self-center right-32 lg:right-48 w-16 h-8 lg:h-12 bg-white`}
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
