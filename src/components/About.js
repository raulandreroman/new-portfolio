import React from 'react';
import Paragraph from './Paragraph';

import { Text } from '../containers/Language';
import { ThemeContext } from '../containers/ThemeContext';

export default function About(props) {
  const { theme } = React.useContext(ThemeContext);
  //Gets text content
  const sectionContent = Text({ section: 'aboutSection' });

  return (
    <section className="flex flex-col mx-8 my-4 mt-7 lg:mx-48 lg:mt-0">
      <div className="flex my-5 mb-3 lg:mt-0">
        <h3 className={`relative text-white z-20 blend-difference lg:text-5xl`}>
          <Text tid="header" section="aboutSection" />
        </h3>
        <div
          className={`relative self-end right-8 lg:right-13 w-16 h-8 lg:h-12 bg-${theme}-secondary`}
        />
      </div>
      <div className="lg:mx-48 max-w-1xl flex flex-col my-4 lg:mb-16">
        {sectionContent.content.map((item, key) => {
          const { paragraph } = item;

          return <Paragraph theme={theme} content={paragraph} key={key} />;
        })}
      </div>
    </section>
  );
}
