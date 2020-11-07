import React from 'react';
import projects from '../../data/projects.json';
import Project from '../Project';

export default function ProjectsSection(props) {


  return (
    <div className={`bg-black px-8 py-4 pb-24 mt-7 flex flex-col lg:px-48 lg:py-16`}>
      <h3 className={`text-white font-normal center m-auto mb-3 mt-2 lg:m-0`}>Projects</h3>
      {projects.map((project, key) => {
        return <Project details={project} key={key} handleClick={props.handleClick}/>;
      })}
    </div>
  );
}
