import Logo from '../../components/Logo';
import { SearchSubscribeWrapper } from '../../components/SearchAndSubscribe';
import {
  HeaderContainer,
  LinkWrapper,
  Link,
  HamburgerMenuButton,
  HamburgerIcon
} from './styled';

export interface MenuMobileProps {
  toggleMenuMobile: () => void;
}

const Header = (props: MenuMobileProps) => (
  <HeaderContainer>
    <Logo />
    <LinkWrapper>
      <Link style={{ borderBottom: '3px solid #EE6352' }}>
        <span style={{ color: '#262522' }}>Home</span>
      </Link>
      <Link>Recipes</Link>
      <Link>Cooking Tips</Link>
      <Link>About Us</Link>
    </LinkWrapper>
    <SearchSubscribeWrapper $main={true} />
    <HamburgerMenuButton onClick={props.toggleMenuMobile}>
      <HamburgerIcon />
    </HamburgerMenuButton>
  </HeaderContainer>
);

export default Header;
