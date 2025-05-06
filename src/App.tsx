import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Container from './components/LayoutContainer/styled';
import MenuMobile from './components/MobileMenu';
import Header from './containers/Header';
import Footer from './containers/Footer';
import CTASection from './containers/CallToActionSection';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
