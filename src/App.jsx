import React from 'react';
import useLocalStorage from 'use-local-storage';
import './App.css';
import ContactBtn from './components/contactBtn/ContactBtn';
import SwiperProfile from './components/SwiperProfile/SwiperProfile';
import InfoProfile from './components/infoProfile/InfoProfile';
import About from './components/about/About';
import FooterSns from './components/footer-sns/FooterSns';

const App = () => {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage(
    'theme',
    defaultDark ? 'dark' : 'light'
  );

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });

  return (
      <div className="app" data-theme={theme}>
        <button onClick={switchTheme} className="switch-theme-btn">
          Switch to {theme === 'light' ? 'Dark' : ' Light'} Theme
        </button>
        <div className="digital-business-card">
          <div>
            <SwiperProfile />
          </div>
          <div>
            <InfoProfile />
            <ContactBtn />
          </div>
          <About />
          <FooterSns />
        </div>
      </div>
  );
};

export default App;
