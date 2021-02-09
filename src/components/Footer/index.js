import React from 'react';
//Import icons
import { SiGmail, SiGithub, SiLinkedin, SiCodepen } from 'react-icons/si';
//Import text context
import { Text } from '../../containers/Language';

export default function Footer(props) {
  const icons = [
    {
      name: 'Gmail',
      icon: SiGmail,
      url: 'email',
    },
    {
      name: 'Github',
      icon: SiGithub,
      url: 'https://github.com/randrerd',
    },
    {
      name: 'LinkedIn',
      icon: SiLinkedin,
      url: 'https://linkedin.com/in/randrerd',
    },
    {
      name: 'CodePen',
      icon: SiCodepen,
      url: 'http://codepen.io/randrerd/',
    },
  ];

  return (
    <section className="flex flex-col bg-black items-center">
      <div className="p-5 text-white flex flex-row text-3xl justify-between w-64 my-10 mb-4">
        {icons.map((icon, key) => {
          return (
            <a
              aria-label={`Visit ${icon.name} profile`}
              href={
                icon.url === 'email' ? 'mailto:hola@raulandre.com' : icon.url
              }
              target="_blank"
              rel="noreferrer"
              key={key}
            >
              <icon.icon />
            </a>
          );
        })}
      </div>
      <div className="flex flex-col text-xs font-light mb-5 self-center items-center ">
        <p className="text-gray-100">
          <Text section="footerSection" tid="content" />
        </p>
        <p className="text-gray-100">@randrerd</p>
      </div>
    </section>
  );
}
