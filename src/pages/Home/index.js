import React, { useContext } from 'react';
import Helmet from 'react-helmet';
import { ThemeContext } from '../../containers/ThemeContext';

import Hero from '../../components/Hero/';
import About from '../../components/About/';
import ProjectsSection from '../../components/Projects/';
import Contact from '../../components/Contact/';
import Triangle from '../../components/Triangle';
import Footer from '../../components/Footer/';
import LazyLoad from 'react-lazyload';
import Placeholder from '../../components/Placeholder';

export default function Home() {
  const { theme } = useContext(ThemeContext);

  function handleClick(url) {
    if (url === 'email') {
      window.location = 'mailto:hola@raulandre.com';
    } else {
      const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
      if (newWindow) newWindow.opener = null;
    }
  }

  return (
    <div
      className={
        theme === 'light'
          ? 'bg-light-bg duration-700'
          : `bg-dark-bg duration-700`
      }
    >
      <Helmet
        bodyAttributes={{
          class:
            theme === 'light'
              ? 'bg-light-bg duration-700 z-30'
              : `bg-dark-bg duration-700 z-30`,
        }}
      />
      <Hero />
      <About />
      <LazyLoad height={800} offset={150} placeholder={Placeholder}>
        <ProjectsSection handleClick={handleClick} />
        <Triangle />
      </LazyLoad>
      <Contact handleClick={handleClick} />
      <Footer handleClick={handleClick} />
    </div>
  );
}
