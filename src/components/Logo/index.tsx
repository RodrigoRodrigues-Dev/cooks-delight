import { LogoContent, LogoName } from './styled';

export type LogoProps = {
  color?: 'main' | 'light';
  logo?: 'main' | 'light';
};

const logoSrc = {
  main: 'https://cooks-delight-images.vercel.app/Logo40.png',
  light: 'https://cooks-delight-images.vercel.app/Logo40Light.png'
};

const Logo: React.FC<LogoProps> = ({ color = 'main', logo = 'main' }) => (
  <LogoContent>
    <img src={logoSrc[logo]} alt="Cooks Delight Logo" />
    <LogoName color={color}>
      Cooks <br /> Delight
    </LogoName>
  </LogoContent>
);

export default Logo;
