import React from 'react';
import NavBarTools from '../NavBarTools';

export default function CallToAction(props) {

  return (
    <header className={`mx-8 my-4`}>
      <NavBarTools themeHandler={props}  />
      <div className="flex flex-col w-10/12">
        <h1 className={`text-${props.theme}-secondary`}>Front End Developer</h1>
        <div>
          <h2 className={`my-2 text-${props.theme}-primary`}>
            ¡Hola! Me llamo Raúl, lorem ipsum at setir kalecs as
          </h2>
          <div className={`w-32 my-1 h-1 bg-${props.theme}-secondary`}></div>
        </div>
      </div>
    </header>
  );
}
