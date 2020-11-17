import React from 'react';

export default function Paragraph(props) {
  const { content, theme } = props;

  const { text, subtitle, style } = content;

  return !text ? (
    <p className={`text-${theme}-primary lg:text-lg mb-2`}>{content}</p>
  ) : style === 'doubleSquare' ? (
    <>
      <p className={`text-${theme}-primary lg:text-lg mb-2 lg:mb-0`}>{text}</p>
      <div className="self-end h-12">
        <div className={`relative ml-6 w-10 h-10 bg-${theme}-secondary`} />
        <div
          className={`relative w-10 h-10 bottom-5 blend-difference bg-white`}
        />
      </div>
    </>
  ) : style === 'thinRectangle' ? (
    <div className="flex flex-col">
      <h4 className={`text-${theme}-secondary lg:text-2xl`}>{subtitle}</h4>
      <p className={`text-${theme}-primary mt-3 lg:text-lg  mb-2 lg:mb-0`}>
        {text}
      </p>
      <div
        className={`relative w-24 h-2 bg-${theme}-secondary w-40 mb-2 self-start lg:h-3`}
      />
    </div>
  ) : style === 'singleSquare' ? (
    <>
      <p className={`text-${theme}-primary mb-2 lg:text-lg `}>{text}</p>
      <div
        className={`relative w-8 h-8 bottom-1 bg-${theme}-secondary self-end`}
      />
    </>
  ) : (
    <div className="mt-8">
      <h4 className={`text-${theme}-secondary lg:text-2xl`}>{subtitle}</h4>
      <p className={`text-${theme}-primary mt-3 lg:text-lg mb-2`}>{text}</p>
    </div>
  );
}
