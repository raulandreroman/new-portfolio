import React from 'react';
import NavBarTools from '../NavBarTools';
import { ThemeContext } from '../../utilities/ThemeContext';


export default function CallToAction(props) {

  const { theme } = React.useContext(ThemeContext);
  return (
    <header className={`mx-8 my-4 mb-8`}>
      <NavBarTools />
      <div className="flex flex-col w-10/12">
        <h1
          className={
            theme === 'light' ? `text-light-secondary` : `text-dark-secondary `
          }
        >
          Front End Developer
        </h1>
        <div>
          <h2
            className={
              theme === 'light'
                ? `text-light-primary my-2`
                : ` text-dark-primary my-2 `
            }
          >
            ¡Hola! Me llamo Raúl, lorem ipsum at setir kalecs as
          </h2>
          <div
            className={
              theme === 'light'
                ? `bg-light-secondary w-32 my-1 h-1`
                : `w-32 my-1 h-1 bg-dark-secondary `
            }
          ></div>
        </div>
      </div>
    </header>
  );
}
