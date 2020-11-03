import React from 'react';
import { ThemeContext } from '../../utilities/ThemeContext';

export default function Triangle() {
  const { theme } = React.useContext(ThemeContext);
  return (
    <>
      {theme === 'dark' && (
          <>
        <div className=" w-48 h-1 relative z-10 m-auto bg-black"></div>
        <div className=" w-48 h-1 relative z-10 m-auto top-2 bg-black"></div>
        <div className=" w-48 h-1 relative z-10 m-auto top-4 bg-black"></div>
        </>
      )}
      <div className="w-0 h-0 triangle m-auto relative bottom-10 blend-difference"></div>
    </>
  );
}
