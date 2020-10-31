import React from 'react';
import Helmet from 'react-helmet';
import { ThemeContext } from '../../utilities/ThemeContext';

import CallToAction from '../../components/CallToAction';
import About from '../../components/About';
import ProjectsSection from '../../components/ProjectsSection'
import Contact from '../../components/Contact'

export default function Home() {
  const { theme } = React.useContext(ThemeContext);
  function handleClick(url) {
    if(url=== 'email') {
      window.location = 'mailto:raulandrerd@gmail.com'
    } else{
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
      ;
      <CallToAction theme={theme} />
      <About theme={theme} />
      <ProjectsSection theme={theme} handleClick={handleClick} />
      <Contact theme={theme} handleClick={handleClick}/>
    </>
  );
}
