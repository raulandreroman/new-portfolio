import React from 'react';
import TechStack from '../TechStack';
import Preview from '../Preview';

import { Text } from '../../containers/Language';

export default function Project(props) {
  const {
    title,
    summary,
    firstLink,
    secondLink,
    techStack,
    previewUrl,
  } = props.details;
  const { handleClick } = props;

  return (
    <div className='flex flex-col my-12 lg:flex-row lg:mb-32'>
      <div className={`flex flex-col mb-4 lg:mx-48 lg:max-w-1xl lg:mr-20 lg:mb-0`}>
  
        <button className='my-2' onClick={() => handleClick(secondLink)}>
          <Preview previewUrl={previewUrl} />
        </button>
       
        <div className={'flex justify-center w-full max-w-sm self-center lg:max-w-none'}>
        
          <button
            onClick={() => handleClick(firstLink)}
            className={'w-auto flex-grow h-8 bg-white mx-2 lg:w-24 lg:h-8 lg:flex-grow-0 max'}
          >
            <span><Text section='projectsSection' tid='btn1' /></span>
          </button>
          <button
            onClick={() => handleClick(secondLink)}
            className={'w-auto flex-grow h-8 bg-white mx-2 lg:w-24 lg:h-8 lg:flex-grow-0'}
          >
             <span><Text section='projectsSection' tid='btn2' /></span>
          </button>
     
        </div>
        <div className={`relative self-center w-48 h-2 mt-2 bg-white lg:ml-2 lg:w-40`} />
      
      </div>
      <div className='flex flex-col items-start flex-shrink-0 lg:w-1/4'>
      <h4 className={'text-white mb-3 font-normal lg:self-start lg:mt-3 lg:mb-0'}>{title}</h4>
      <p className={'text-white text-lg font-light'}>{summary}</p>
      <TechStack content={techStack} />
      </div>
    </div>
  );
}
