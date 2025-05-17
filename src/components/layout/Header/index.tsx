import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import Logo from '../../ui/Logo';
import { SearchSubscribeWrapper } from '../SearchAndSubscribe';

import {
  HeaderContainer,
  HeaderContent,
  HamburgerIcon,
  HamburgerMenuButton,
  LinkStyled,
  LinkWrapper,
  SearchSubscribeContainer
} from './styles';

export interface MenuMobileProps {
  toggleMenuMobile: () => void;
  $location: string;
}

const LINK_ITEMS = [
  { name: 'Home', to: '' },
  { name: 'Recipes', to: '#recipes-section' },
  { name: 'Cooking Tips', to: '#explore-section' },
  { name: 'About Us', to: '#about-us-section' }
] as const;

const Header: React.FC<MenuMobileProps> = ({ toggleMenuMobile, $location }) => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (location.pathname !== '/') return;

    const observerOptionsById: Record<string, IntersectionObserverInit> = {
      'recipes-section': { rootMargin: '-300px 0px -50% 0px', threshold: 0 },
      'explore-section': { rootMargin: '-300px 0px -50% 0px', threshold: 0 },
      'about-us-section': { rootMargin: '200px 0px -50% 0px', threshold: 0 }
    };

    const observers: IntersectionObserver[] = [];

    LINK_ITEMS.forEach(({ to }) => {
      const id = to.replace('#', '');
      if (!id) return;

      const element = document.getElementById(id);
      if (!element) return;

      const options = observerOptionsById[id] || {
        rootMargin: '0px 0px -50% 0px',
        threshold: 0
      };
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            window.history.replaceState(null, '', `#${entry.target.id}`);
          }
        });
      }, options);

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, [location.pathname]);

  return (
    <HeaderContainer $scrolled={scrolled}>
      <HeaderContent $scrolled={scrolled}>
        <Link to="/">
          <Logo
            logo={scrolled ? 'light' : 'main'}
            color={scrolled ? 'light' : 'main'}
          />
        </Link>

        <LinkWrapper>
          {LINK_ITEMS.map(({ name, to }) => (
            <HashLink
              key={to || 'home'}
              smooth
              to={`/${to}`}
              onClick={() =>
                name === 'Home'
                  ? window.scroll({ top: 0, behavior: 'smooth' })
                  : undefined
              }
              scroll={el => {
                if (!el || name === 'Home') return;
                setTimeout(() => {
                  window.scrollTo({
                    top: el.offsetTop - 95,
                    behavior: 'smooth'
                  });
                }, 350);
              }}
            >
              <LinkStyled
                $scrolled={scrolled}
                $location={$location}
                $itemLocation={to}
              >
                {name}
              </LinkStyled>
            </HashLink>
          ))}
        </LinkWrapper>

        <SearchSubscribeContainer>
          <SearchSubscribeWrapper $main={!scrolled} />
        </SearchSubscribeContainer>

        <HamburgerMenuButton onClick={toggleMenuMobile} $scrolled={scrolled}>
          <HamburgerIcon />
        </HamburgerMenuButton>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
