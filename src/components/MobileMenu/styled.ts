import styled, { css } from 'styled-components';
import colors from '../../styles/colors';
import { IoClose } from 'react-icons/io5';
import { BiLogoFacebookSquare } from 'react-icons/bi';
import { PiInstagramLogoFill } from 'react-icons/pi';
import { FaYoutube } from 'react-icons/fa';

interface MenuMobileStyledProps {
  $menuVisible: boolean;
}

export const MenuMobileContainer = styled.div<MenuMobileStyledProps>`
  z-index: 9999;
  position: absolute;
  top: 0;
  right: 100%;
  width: 100vw;
  height: 100vh;
  padding: 16px 24px;

  color: ${colors.Background};
  background-color: ${colors.Dark};

  transition: all 0.3s ease-in-out;

  ${({ $menuVisible }) => $menuVisible && 'right: 0;'}

  @media (min-width: 1020px) {
    display: none;
  }
`;

export const NavigationHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CloseIcon = styled(IoClose as React.ComponentType)`
  font-size: 24px;
  color: ${colors.PrimaryColor2};
`;

export const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 34px;
  width: 34px;

  border-radius: 16px;
  background-color: rgb(255, 251, 242, 16%);
  border: none;

  &:hover {
    cursor: pointer;
    background-color: rgb(255, 251, 242, 30%);
  }
`;

export const LinkWrapper = styled.ul`
  display: flex;
  flex-direction: column;

  margin: 40px 0;
  width: 100%;
`;

export const Link = styled.li`
  padding: 16px 0;
  border-radius: 2px;
  border-bottom: 1px solid rgba(240, 235, 225, 16%);

  font-size: 16px;
  text-transform: uppercase;

  transition: all 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    color: ${colors.PrimaryColor2};

    border-bottom: 1px solid ${colors.PrimaryColor2};
  }
`;

export const SocialLinksWrapper = styled.div`
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  justify-content: center;
  gap: 16px;
`;

const SocialIconBase = css`
  font-size: 32px;
  transition: all 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    color: ${colors.PrimaryColor2};
  }
`;

export const FacebookIcon = styled(BiLogoFacebookSquare as React.ComponentType)`
  ${SocialIconBase}
`;

export const InstagramIcon = styled(PiInstagramLogoFill as React.ComponentType)`
  ${SocialIconBase}
`;

export const YoutubeIcon = styled(FaYoutube as React.ComponentType)`
  ${SocialIconBase}
`;
