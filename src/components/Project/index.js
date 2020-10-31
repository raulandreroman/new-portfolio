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
    <div className={`flex flex-col mb-12`}>
      <h4 className={'text-white my-3'}>{title}</h4>
      <button onClick={() => handleClick(secondLink)}>
        <Preview previewUrl={previewUrl} />
      </button>
      <p className={'text-whiteish'}>{summary}</p>
      <div className={'flex justify-end my-8'}>
        <button
          onClick={() => handleClick(firstLink)}
          className={'w-16 bg-white mx-2'}
        >
          <span>Repo</span>
        </button>
        <button
          onClick={() => handleClick(secondLink)}
          className={'w-16 bg-white'}
        >
          <span>Live</span>
        </button>
      </div>
      <TechStack content={techStack} />
    </div>
  );
}
