import React from 'react';
import Helmet from 'react-helmet';
import { ThemeContext } from '../../containers/ThemeContext';

import CallToAction from '../../components/CallToAction';
import About from '../../components/About';
import ProjectsSection from '../../components/ProjectsSection';
import Contact from '../../components/Contact';
import Triangle from '../../components/Triangle';
import Footer from '../../components/Footer'

export default function Home() {
  const { theme } = React.useContext(ThemeContext);
  function handleClick(url) {
    if (url === 'email') {
      window.location = 'mailto:raulandrerd@gmail.com';
    } else {
      const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
      if (newWindow) newWindow.opener = null;
    }
  }
  return (
    <>
      <Helmet
        bodyAttributes={{
          class:
            theme === 'light'
              ? 'bg-light-bg duration-300'
              : `bg-dark-bg duration-300`,
        }}
      />
      <CallToAction />
      <About />
      <ProjectsSection handleClick={handleClick} />
      <Triangle />
      <Contact handleClick={handleClick} />
      <Footer handleClick={handleClick} />
    </>
  );
}
