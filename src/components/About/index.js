import React from 'react';
import Paragraph from '../Paragraph';
import paragraphs from '../../data/aboutContent.json'

export default function About(props) {
 
  const { theme } = props;

  return (
    <section className="flex-col mx-8 my-4 mt-7">
      <div className="flex my-5 h-12 mb-3">
        <h3 className={`relative text-white z-20 blend-difference`}>Journey</h3>
        <div
          className={`relative self-end right-8 w-16 h-8 bg-${theme}-secondary`}
        />
      </div>
      <div>
        {paragraphs.map((paragraph, key) => {
          const { title, content, style } = paragraph;

          return <Paragraph title={title} content={content} key={key} theme={theme} style={style} />;
        })}
      </div>
    </section>
  );
}
