import React from 'react';
import { isMobile } from 'react-device-detect';
import LazyLoad from 'react-lazyload';

export default function Preview(props) {
  const { previewUrl } = props;

  return (
    <div className="flex flex-col mt-4 mb-2">
      <LazyLoad height={250} offset={320}>
        {isMobile ? (
          <img
            className="self-center m-auto h-56 lg:hidden"
            alt="Screenshot of current project"
            src={previewUrl.mobile}
          />
        ) : (
          <img
            className="self-start m-0 hidden lg:block"
            alt="Screenshot of current project"
            src={previewUrl.desktop}
          />
        )}
      </LazyLoad>
    </div>
  );
}
