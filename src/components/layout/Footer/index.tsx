import Logo from '../../ui/Logo';
import {
  FooterContainer,
  FooterHeader,
  LinksWrapper,
  LinkItem,
  SocialLinks,
  FacebookIcon,
  InstagramIcon,
  TiktokIcon,
  YoutubeIcon,
  Line,
  FooterText
} from './styles';

const Footer = () => (
  <FooterContainer>
    <FooterHeader>
      <Logo logo="light" color="light" />
      <LinksWrapper>
        <LinkItem>Home</LinkItem>
        <LinkItem>Recipes</LinkItem>
        <LinkItem>Cooking Tips</LinkItem>
        <LinkItem>About Us</LinkItem>
      </LinksWrapper>
      <SocialLinks>
        <TiktokIcon />
        <FacebookIcon />
        <InstagramIcon />
        <YoutubeIcon />
      </SocialLinks>
    </FooterHeader>
    <Line />
    <FooterText>Copyright: © 2024 Cooks Delight.</FooterText>
  </FooterContainer>
);

export default Footer;
