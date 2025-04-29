import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Container from './components/LayoutContainer/styled';
import MenuMobile from './components/MobileMenu';
import Header from './containers/Header';
import Footer from './containers/Footer';
import CTASection from './containers/CallToActionSection';

function App() {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <Container>
      <Header toggleMenuMobile={() => setMenuVisible(!menuVisible)} />
      <MenuMobile
        onClose={() => setMenuVisible(false)}
        $menuVisible={menuVisible}
      />
      <Outlet />
      <CTASection></CTASection>
      <Footer />
    </Container>
  );
}

export default App;
