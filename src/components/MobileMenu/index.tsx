import Logo from '../Logo';
import { SearchSubscribeWrapper } from '../SearchAndSubscribe';
import {
  MenuMobileContainer,
  NavigationHeader,
  CloseButton,
  CloseIcon,
  LinkWrapper,
  Link,
  SocialLinksWrapper,
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon
} from './styled';

export interface MenuMobileProps {
  $menuVisible: boolean;
  onClose: () => void;
}

const MenuMobile = ({ $menuVisible, onClose }: MenuMobileProps) => (
  <MenuMobileContainer $menuVisible={$menuVisible}>
    <NavigationHeader>
      <Logo color="light" />
      <CloseButton onClick={onClose}>
        <CloseIcon />
      </CloseButton>
    </NavigationHeader>
    <LinkWrapper>
      <Link>Home</Link>
      <Link>About</Link>
      <Link>Products</Link>
      <Link>Contact</Link>
    </LinkWrapper>
    <SearchSubscribeWrapper $main={false} />
    <SocialLinksWrapper>
      <FacebookIcon />
      <InstagramIcon />
      <YoutubeIcon />
    </SocialLinksWrapper>
  </MenuMobileContainer>
);

export default MenuMobile;
