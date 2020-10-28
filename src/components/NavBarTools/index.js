import React from 'react';
import { CgMoon, CgSun, CgGlobeAlt } from 'react-icons/cg';

export default function NavBarTools(props) {
    console.log(props)
  return (
    <div className="flex flex-col items-end text-4xl">
      <button onClick={props.themeHandler.callback}>
        {props.themeHandler.theme === 'dark' ? (
          <CgSun
            className={`my-1 text-${props.themeHandler.theme}-secondary fill-current`}
          />
        ) : (
          <CgMoon className={`my-1 text-${props.themeHandler.theme}-secondary`} />
        )}
      </button>
      <button>
        <CgGlobeAlt className={`my-1 text-${props.themeHandler.theme}-secondary`} />
      </button>
    </div>
  );
}
