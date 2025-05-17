import styled, { css } from 'styled-components';
import colors from '../../../styles/colors';
import { FaTiktok } from 'react-icons/fa6';
import { IoLogoFacebook } from 'react-icons/io';
import { RiInstagramFill } from 'react-icons/ri';
import { BsYoutube } from 'react-icons/bs';

export const FooterContainer = styled.footer`
  background-color: ${colors.Dark};
  color: ${colors.Background};
  border-radius: 32px;
  padding: 24px 40px;
  margin-bottom: 16px;
`;

export const FooterHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1020px) {
    flex-direction: column;
  }
`;

export const LinksWrapper = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  color: ${colors.Background};
  font-size: 16px;
  line-height: 24px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 1020px) {
    position: relative;
    flex-direction: column;
    margin: 16px 0;
    gap: 16px;
    width: 100%;
  }
`;

export const LinkItem = styled.li`
  border-radius: 2px;
  border-right: 1px solid rgba(240, 235, 225, 20%);
  padding: 0 16px;
  transition: all 0.2s ease-in-out;

  &:last-child {
    border-right: none;
  }

  &:hover {
    cursor: pointer;
    color: ${colors.PrimaryColor2};
  }

  @media (max-width: 1020px) {
    padding: 12px 0;
    border: none;
    border-bottom: 1px solid rgba(240, 235, 225, 20%);

    &:last-child {
      border-bottom: none;
    }

    &:hover {
      border-bottom: 1px solid ${colors.PrimaryColor2};

      &:last-child {
        border-bottom: none;
      }
    }
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 19px;
`;

const iconStyles = css`
  font-size: 20px;

  &:hover {
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    color: ${colors.PrimaryColor2};
  }
`;

export const FacebookIcon = styled(IoLogoFacebook as React.ComponentType)`
  ${iconStyles}
`;

export const InstagramIcon = styled(RiInstagramFill as React.ComponentType)`
  ${iconStyles}
`;

export const YoutubeIcon = styled(BsYoutube as React.ComponentType)`
  ${iconStyles}
`;

export const TiktokIcon = styled(FaTiktok as React.ComponentType)`
  ${iconStyles}
`;

export const Line = styled.div`
  margin: 24px 0 16px 0;
  background-color: rgba(240, 235, 225, 20%);
  height: 1px;
  width: 100%;
`;

export const FooterText = styled.p`
  color: rgba(240, 235, 225, 60%);
  text-align: center;
`;
