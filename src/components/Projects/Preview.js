import React from 'react';
import { isMobile } from 'react-device-detect';
import LazyLoad from 'react-lazyload';

export default function Preview(props) {
  const { previewUrl } = props;

  return (
    <div className="flex flex-col my-2 md:mt-4">
      <LazyLoad
        height={250}
        offset={150}
        once
        placeholder={<img alt="" className="project-fallback" />}
      >
        {isMobile ? (
          <img
            className="self-center m-auto h-56 project-fallback"
            alt="Screenshot of current project"
            src={previewUrl.mobile}
          />
        ) : (
          <img
            className="self-start m-auto project-fallback"
            alt="Screenshot of current project"
            src={previewUrl.desktop}
          />
        )}
      </LazyLoad>
    </div>
  );
}
