import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { useSelector } from 'react-redux';
import type { RootState } from './store';

import Container from './components/layout/LayoutContainer/styled';
import MenuMobile from './components/layout/MobileMenu';

import Header from './components/layout/Header';
import SearchBox from './containers/SearchBox';
import CTASection from './containers/sections/SectionCallToAction';
import Footer from './components/layout/Footer';

function App() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [location, setLocation] = useState(String);

  const searchBoxVisibility = useSelector(
    (state: RootState) => state.searchBoxVisibility.isVisible
  );

  useEffect(() => {
    if (searchBoxVisibility || menuVisible) {
      if (searchBoxVisibility) {
        setMenuVisible(false);
      }
      document.body.style.overflow = 'hidden';
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = '';
    }
  }, [searchBoxVisibility, menuVisible]);

  const handleHash = () => {
    setLocation(window.location.hash);
    if (window.scrollY === 0) {
      const urlWithoutHash = window.location.origin + window.location.pathname;
      window.history.replaceState(null, '', urlWithoutHash);
    }
  };

  window.addEventListener('scroll', handleHash);

  return (
    <>
      <Header
        toggleMenuMobile={() => setMenuVisible(!menuVisible)}
        $location={location}
      />
      <Container>
        <MenuMobile
          onClose={() => setMenuVisible(false)}
          $menuVisible={menuVisible}
        />
        <SearchBox />
        <Outlet />
        <CTASection />
        <Footer />
      </Container>
    </>
  );
}

export default App;
