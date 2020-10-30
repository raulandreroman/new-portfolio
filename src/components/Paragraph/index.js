import React from 'react';

export default function Paragraph(props) {
  const { title, content, theme,style } = props;

  return !title && !style ? (
    <p className={`text-${theme}-primary my-3`}>{content}</p>
  ) : style==='doubleSquare' ? (
    //Adds 2 square-ish divs for design purposes
    <>
      <p className={`text-${theme}-primary my-3`}>{content}</p>
      <div className="absolute">
        <div className={`relative left-64 w-10 h-10 bg-${theme}-secondary`} />
        <div
          className={`relative left-56 w-10 h-10 bottom-5 blend-difference bg-white`}
        />
      </div>
    </>
  ) : style === 'thinRectangle' ? (
    <div className="my-8">
      <h4 className={`text-${theme}-secondary`}>{title}</h4>
      <p className={`text-${theme}-primary my-3`}>{content}</p>
      <div
        className={`relative left-48 w-24 h-2 bottom-2 bg-${theme}-secondary`}
      />
    </div>
  ) : style === 'singleSquare' ? (
    <>
      <p className={`text-${theme}-primary my-3`}>{content}</p>
      <div
        className={`relative w-8 h-8 bottom-1 bg-${theme}-secondary`}
      />
    </>
  ) : (
    <div className="my-8">
      <h4 className={`text-${theme}-secondary`}>{title}</h4>
      <p className={`text-${theme}-primary my-3`}>{content}</p>
    </div>
  );
}
