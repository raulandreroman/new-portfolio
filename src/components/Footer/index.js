import React from 'react';
import {
  SiGmail,
  SiGithub,
  SiLinkedin,
  SiTwitter,
  SiInstagram,
} from 'react-icons/si';

export default function Footer(props) {
  const { handleClick } = props;
  // const icons = [SiGmail, SiGithub, SiLinkedin, SiTwitter, SiInstagram]

  const icons = [
    {
      name: 'Gmail',
      icon: SiGmail,
      url: 'mailto:raulandrerd@gmail.com',
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
  console.log();
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
      <div className="flex flex-col text-xs font-light self-start ml-8 mb-5 ">
        <p className="text-whiteish">
          Made with React.js, TailwindCSS and a lot of ❤
        </p>
        <p className="text-whiteish">@randrerd</p>
      </div>
    </section>
  );
}
