import React from 'react';

export default function Preview(props) {
  const { previewUrl } = props;
console.log(previewUrl)
  return (
    <div className="flex flex-col mt-4 mb-2">
      <img
        className="self-center m-auto h-56 lg:hidden"
        alt="Screenshot of current project"
        src={previewUrl.mobile}
      />
      <img
        className="self-start m-0 h-56 hidden lg:block"
        alt="Screenshot of current project"
        src={`${previewUrl.desktop}`}
      />
    </div>
  );
}
