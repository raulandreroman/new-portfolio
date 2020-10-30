import React from 'react';
import Helmet from 'react-helmet';
import { ThemeContext } from '../../utilities/ThemeContext';

import CallToAction from '../../components/CallToAction';
import About from '../../components/About';
import ProjectsSection from '../../components/ProjectsSection'

export default function Home() {
  const { theme } = React.useContext(ThemeContext);

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
      <ProjectsSection theme={theme} />
    </>
  );
}
