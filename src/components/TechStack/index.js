import React from 'react';
import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiGit,
  SiCss3,
  SiHtml5,
  SiSass,
} from 'react-icons/si';
import { CgSmartphone } from 'react-icons/cg';

export default function TechStack(props) {
  const { content } = props;

  const icons = {
    markupAndComponents: [
      {
        name: 'Html5',
        icon: SiHtml5,
      },
      {
        name: 'Javascript',
        icon: SiJavascript,
      },
      {
        name: 'React',
        icon: SiReact,
      },
    ],
    styling: [
      {
        name: 'Css3',
        icon: SiCss3,
      },
      {
        name: 'Sass',
        icon: SiSass,
      },
      {
        name: 'Tailwindcss',
        icon: SiTailwindcss,
      },
    ],
    utils: [
      {
        name: 'Git',
        icon: SiGit,
      },
      {
        name: 'MobileFirst',
        icon: CgSmartphone,
      },
    ],
  };

  function renderIcons(origin, icons) {
    let test3 = [];
    origin.forEach((tech) => {
      let foundIcon = icons.find((icon) => tech === icon.name);
      test3.push(foundIcon);
    });
    return test3;
  }
  return (
    <>
      <h4 className={'text-white my-3 text-xl font-medium'}>Tech Stack</h4>
      <div className={'text-3xl'}>
        <div className={'flex'}>
          {renderIcons(
            content.markupAndComponents,
            icons.markupAndComponents
          ).map((icon, key) => {
            return <icon.icon className="m-1 text-white" key={key} />;
          })}
        </div>
        <div className={'flex'}>
          {renderIcons(content.styling, icons.styling).map((icon, key) => {
            return <icon.icon className="m-1 text-white" key={key} />;
          })}
        </div>
        <div className={'flex'}>
          {renderIcons(
            content.utils,
            icons.utils
          ).map((icon, key) => {
            return <icon.icon className="m-1 text-white" key={key} />;
          })}
        </div>
      </div>
    </>
  );
}
