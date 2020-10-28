import React from 'react';
import { ThemeContext } from '../../utilities/ThemeContext';
import CallToAction from '../../components/CallToAction';
import Helmet from 'react-helmet';

export default function Home() {
  const { theme, setTheme } = React.useContext(ThemeContext);
  const changeTheme = () => {
    console.log(theme);
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };
  return (
    <>
      <Helmet bodyAttributes={{ class: `bg-${theme}-bg duration-300` }} />;
      <CallToAction callback={changeTheme} theme={theme} />
    </>
  );
}
