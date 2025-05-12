import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { useSelector } from 'react-redux';
import type { RootState } from './store';

import Container from './components/LayoutContainer/styled';
import MenuMobile from './components/MobileMenu';

import Header from './containers/Header';
import SearchBox from './containers/SearchBox';
import CTASection from './containers/CallToActionSection';
import Footer from './containers/Footer';

function App() {
  const [menuVisible, setMenuVisible] = useState(false);
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

  return (
    <Container>
      <Header toggleMenuMobile={() => setMenuVisible(!menuVisible)} />
      <MenuMobile
        onClose={() => setMenuVisible(false)}
        $menuVisible={menuVisible}
      />
      <SearchBox />
      <Outlet />
      <CTASection />
      <Footer />
    </Container>
  );
}

export default App;
