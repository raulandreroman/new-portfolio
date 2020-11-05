import React from 'react';
import Paragraph from '../Paragraph';
import paragraphs from '../../data/aboutContent.json'
import { ThemeContext } from '../../utilities/ThemeContext';

export default function About(props) {
 
const { theme } = React.useContext(ThemeContext);

  return (
    <section className="flex flex-col mx-8 my-4 mt-7 lg:mx-48 lg:mt-0">
      <div className="flex my-5 mb-3 lg:mt-0">
        <h3 className={`relative text-white z-20 blend-difference lg:text-5xl`}>Journey</h3>
        <div
          className={`relative self-end right-8 lg:right-13 w-16 h-8 lg:h-12 bg-${theme}-secondary`}
        />
      </div>
      <div className='lg:mx-48 max-w-1xl flex flex-col my-4 lg:mb-16'>
        {paragraphs.map((paragraph, key) => {
          const { title, content, style } = paragraph;

          return <Paragraph title={title} content={content} key={key} theme={theme} style={style} />;
        })}
      </div>
    </section>
  );
}
