import React from 'react';

export default function Contact(props) {
  const { theme, handleClick } = props;
  return (
    <div className="flex flex-col">
      <button onClick={()=> handleClick('email')} className={`bg-${theme}-secondary my-20 mx-6 p-3`}>
        <span className={`text-${theme}-bg text-5xl font-light`}>
          Contact Me!
        </span>
      </button>
    </div>
  );
}
