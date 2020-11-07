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

  return (
    <>
      <h4 className={'text-white my-3 text-xl font-light'}>Tech Stack</h4>
      <div className={'text-3xl'}>
        <div className={'flex'}>
          {content.markupAndComponents.map((tech, key) => {
            switch (tech) {
              case 'Html5':
                return <SiHtml5 className={`m-1 text-white`} key={key} />;
              case 'Javascript':
                return <SiJavascript className={`m-1 text-white`} key={key} />;
              case 'React':
                return <SiReact className={`m-1 text-white`} key={key} />;
              default:
                return <></>;
            }
          })}
        </div>
        <div className={'flex'}>
          {content.styling.map((tech, key) => {
            switch (tech) {
              case 'Css3':
                return <SiCss3 className={`m-1 text-white`} key={key} />;
              case 'Sass':
                return <SiSass className={'m-1 text-white'} key={key} />;
              case 'Tailwindcss':
                return <SiTailwindcss className={`m-1 text-white`} key={key} />;
              default:
                return <></>;
            }
          })}
        </div>
        <div className={'flex'}>
          {content.utils.map((tech, key) => {
            switch (tech) {
              case 'Git':
                return <SiGit className={`m-1 text-white`} key={key} />;
              case 'MobileFirst':
                return <CgSmartphone className={'m-1 text-white'} key={key} />;
              default:
                return <></>;
            }
          })}
        </div>
      </div>
    </>
  );
}
