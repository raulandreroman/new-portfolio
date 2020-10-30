import React from 'react';

export default function Paragraph(props) {
  const { title, content, theme, id } = props;

  return !title && id !== 3 ? (
    <p className={`text-${theme}-primary my-3`}>{content}</p>
  ) : id === 3 ? (
    <>
      <p className={`text-${theme}-primary my-3`}>{content}</p>
      <div className='absolute'>
      <div
        className={`relative self-end left-64 w-10 h-10 bg-${theme}-secondary`}
      />
      <div
        className={`relative self-end left-56 w-10 h-10 bottom-5 blend-difference bg-white`}
      />
      </div>
    </>
  ) : (
    <div className='my-8'>
      <h4 className={`text-${theme}-secondary`}>{title}</h4>
      <p className={`text-${theme}-primary my-3`}>{content}</p>
    </div>
  );
}
