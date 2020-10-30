import React, { useContext } from 'react';
import { CgMoon, CgSun, CgGlobeAlt } from 'react-icons/cg';
import { ThemeContext } from '../../utilities/ThemeContext';

export default function NavBarTools() {
  const { theme, setTheme } = useContext(ThemeContext);

  function handleClick(){
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }
  return (
    <div className="flex flex-col items-end text-4xl">
      <button onClick={handleClick}>
        {theme === 'dark' ? (
          <CgSun className={`my-1 text-${theme}-secondary`} />
        ) : (
          <CgMoon className={`my-1 text-${theme}-secondary`} />
        )}
      </button>
      <button>
        <CgGlobeAlt className={`my-1 text-${theme}-secondary`} />
      </button>
    </div>
  );
}
