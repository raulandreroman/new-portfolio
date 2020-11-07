import React from 'react';
import TechStack from '../TechStack';
import Preview from '../Preview';

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
    <div className='flex flex-col items-center my-12 lg:flex-row lg:mb-32'>
      <div className={`flex flex-col mb-4 lg:mx-48 lg:max-w-1xl lg:mr-20 lg:mb-0`}>
    
        <h4 className={'text-white mb-3 lg:self-start font-light lg:mt-3 lg:mb-0'}>{title}</h4>
        <button onClick={() => handleClick(secondLink)}>
          <Preview previewUrl={previewUrl} />
        </button>
       
        <div className={'flex justify-center w-full'}>
          <button
            onClick={() => handleClick(firstLink)}
            className={'w-auto flex-grow h-8 bg-white mx-2 lg:w-24 lg:h-8 lg:flex-grow-0'}
          >
            <span>Repo</span>
          </button>
          <button
            onClick={() => handleClick(secondLink)}
            className={'w-auto flex-grow h-8 bg-white mx-2 lg:w-24 lg:h-8 lg:flex-grow-0'}
          >
            <span>Live</span>
          </button>
     
        </div>
        <div className={`relative self-center w-48 h-2 mt-2 bg-white lg:ml-2 lg:w-40`} />
      
      </div>
      <div className='flex flex-col items-start flex-shrink-0 lg:mt-19 lg:w-1/4'>
      <p className={'text-whiteish'}>{summary}</p>
      <TechStack content={techStack} />
      </div>
    </div>
  );
}
