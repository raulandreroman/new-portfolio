import React from 'react';
import { ThemeContext } from '../../utilities/ThemeContext';

export default function Contact(props) {
  const { theme } = React.useContext(ThemeContext);
  const { handleClick } = props;
  return (
    <div className="flex flex-col mb-20">
      <button
        onClick={() => handleClick('email')}
        className={`bg-${theme}-secondary my-8 mx-6 p-3`}
      >
        <span
          className={
            theme === 'light'
              ? `text-light-bg text-5xl font-light`
              : 'text-dark-bg text-5xl font-light'
          }
        >
          Contact Me!
        </span>
      </button>
    </div>
  );
}
