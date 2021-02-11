import React, { useState } from 'react';
//Import icons
import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiGit,
  SiCss3,
  SiHtml5,
  SiSass,
  SiPostcss,
  SiWebpack,
} from 'react-icons/si';
import { CgSmartphone } from 'react-icons/cg';
//Import text context
import { Text } from '../../containers/Language';

export default function TechStack(props) {
  //Creates state for onhover feature
  const [isShown, setIsShown] = useState(false);
  const [techToDisplay, setTechToDisplay] = useState('');

  const { content } = props;

  const icons = {
    markupAndComponents: [
      {
        name: 'Html5',
        display: 'HTML5',
        icon: SiHtml5,
      },
      {
        name: 'Javascript',
        display: 'JavaScript ES6',
        icon: SiJavascript,
      },
      {
        name: 'React',
        display: 'React.JS',
        icon: SiReact,
      },
    ],
    styling: [
      {
        name: 'Css3',
        display: 'CSS3',
        icon: SiCss3,
      },
      {
        name: 'Sass',
        display: 'Sass',
        icon: SiSass,
      },
      {
        name: 'Postcss',
        display: 'PostCSS',
        icon: SiPostcss,
      },
      {
        name: 'Tailwindcss',
        display: 'Tailwind CSS',
        icon: SiTailwindcss,
      },
    ],
    utils: [
      {
        name: 'Git',
        display: 'Git',
        icon: SiGit,
      },
      {
        name: 'Webpack',
        display: 'Webpack',
        icon: SiWebpack,
      },
      {
        name: 'MobileFirst',
        display: 'Responsive Layout',
        icon: CgSmartphone,
      },
    ],
  };

  function renderIcons(origin, icons) {
    let array = [];
    origin.forEach((tech) => {
      let foundIcon = icons.find((icon) => tech === icon.name);
      array.push(foundIcon);
    });
    return array;
  }

  function handleMouseEnter(tech) {
    setIsShown(true);
    setTechToDisplay(tech);
  }
  return (
    <div className="flex flex-col w-32 min-w-8 min-h-12">
      <h4 className={'text-gray-50 my-3 text-xl font-normal'}>
        <Text section="projectsSection" tid="techStackHeader" />
      </h4>
      <div className={'text-3xl'}>
        <div className={'flex'}>
          {renderIcons(
            content.markupAndComponents,
            icons.markupAndComponents
          ).map((icon, key) => {
            return (
              <icon.icon
                onMouseEnter={() => handleMouseEnter(icon.display)}
                onMouseLeave={() => setIsShown(false)}
                onClick={() => handleMouseEnter(icon.display)}
                className="m-1 text-white"
                key={key}
              />
            );
          })}
        </div>
        <div className={'flex'}>
          {renderIcons(content.styling, icons.styling).map((icon, key) => {
            return (
              <icon.icon
                onMouseEnter={() => handleMouseEnter(icon.display)}
                onMouseLeave={() => setIsShown(false)}
                onClick={() => handleMouseEnter(icon.display)}
                className="m-1 text-white"
                key={key}
              />
            );
          })}
        </div>
        <div className={'flex'}>
          {renderIcons(content.utils, icons.utils).map((icon, key) => {
            return (
              <icon.icon
                onMouseEnter={() => handleMouseEnter(icon.display)}
                onMouseLeave={() => setIsShown(false)}
                onClick={() => handleMouseEnter(icon.display)}
                className="m-1 text-white"
                key={key}
              />
            );
          })}
        </div>
      </div>
      {isShown && (
        <p className="text-white font-light text-xs m-1">{techToDisplay}</p>
      )}
    </div>
  );
}
