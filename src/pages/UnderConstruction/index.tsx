import React from 'react';
import { Text } from '../../containers/Language';

export default function UnderConstruction() {
  return (
    <div className="bg-black flex flex-col items-center justify-center h-screen">
      <div className="bg-black z-10 absolute m-8 flex flex-col items-center justify-center border-white border-solid border-8 rounded-sm py-12 px-8 max-w-sm">
        <h1 className="text-4xl text-white z-20">👷🏼‍♂️</h1>
        <h2 className="text-4xl text-white font-medium text-center z-20">
          <Text section="underConstruction" tid="content" />
        </h2>
      </div>
    </div>
  );
}
