import React from 'react';
//Import icons
import {
  SiGmail,
  SiGithub,
  SiLinkedin,
  SiTwitter,
  SiInstagram,
} from 'react-icons/si';
//Import text context
import { Text } from '../containers/Language';

export default function Footer(props) {
  const { handleClick } = props;

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
      name: 'Twitter',
      icon: SiTwitter,
      url: 'https://twitter.com/randrerd',
    },
    {
      name: 'Instagram',
      icon: SiInstagram,
      url: 'https://instagram.com/randrerd',
    },
  ];

  return (
    <section className="flex flex-col bg-black items-center">
      <div className="p-5 text-white flex flex-row text-3xl justify-between w-64 my-10 mb-4">
        {icons.map((icon, key) => {
          return (
            <button key={key} onClick={() => handleClick(icon.url)}>
              <icon.icon />
            </button>
          );
        })}
      </div>
      <div className="flex flex-col text-xs font-light mb-5 self-center items-center ">
        <p className="text-whiteish">
          <Text section="footerSection" tid="content" />
        </p>
        <p className="text-whiteish">@randrerd</p>
      </div>
    </section>
  );
}
