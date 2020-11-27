import React from 'react';

export default function ComingSoon() {
  return (
    <div className="bg-black flex flex-col items-center justify-center h-screen">
      <div className="lg:w-3/12 md:w-2/4 bg-black z-10 absolute m-8 flex flex-col items-center justify-center border-white border-solid border-8 rounded-sm py-8 px-8">
        {/* <h1 className="text-6xl z-20">👷🏽‍♂️</h1> */}
        <h2 className="text-4xl text-white font-medium text-center z-20">
          We're working for you, pretty soon everything will be finished.
        </h2>
      </div>
    </div>
  );
}
