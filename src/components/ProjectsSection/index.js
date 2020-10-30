import React from 'react';
import projects from '../../data/projects.json';
import Project from '../Project';

export default function ProjectsSection(props) {
  return (
    <div className={`bg-black px-8 py-4 mt-7 flex flex-col`}>
      <h1 className={`font-light  text-white center m-auto`}>Projects</h1>
      {projects.map((project, key) => {
        return <Project details={project} key={key} />;
      })}
    </div>
  );
}
