import React, { useContext } from 'react';
import NavBarTools from '../NavBarTools';
import { ThemeContext } from '../../containers/ThemeContext';
import { Text } from '../../containers/Language';

export default function CallToAction(props) {
  const { theme } = useContext(ThemeContext);

  return (
    <header
      className={`mx-8 lg:mx-48 mx lg:mt-8 my-4 lg:mb-0 lg:min-h-screen min-h-12   `}
    >
      <NavBarTools />
      <div className="flex flex-col w-10/12 lg:w-7/12 lg:mt-5 ">
        <h1
          className={
            theme === 'light'
              ? `text-light-secondary lg:text-7xl`
              : `text-dark-secondary lg:text-7xl`
          }
        >
          <Text tid='CTAHeader' />
        </h1>
        <div>
          <h2
            className={
              theme === 'light'
                ? `text-light-primary my-2 lg:text-5xl`
                : ` text-dark-primary my-2 lg:text-5xl`
            }
          >
            <Text tid="CTADescription" />
          </h2>
          <div
            className={
              theme === 'light'
                ? `bg-light-secondary w-32 lg:w-1/2 my-1 h-1 lg:h-3`
                : `w-32 lg:w-1/2 my-1 h-1 lg:h-2 bg-dark-secondary `
            }
          ></div>
        </div>
      </div>
    </header>
  );
}
