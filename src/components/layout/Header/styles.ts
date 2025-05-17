import styled, { css } from 'styled-components';
import { MdOutlineMenu } from 'react-icons/md';

import colors from '../../../styles/colors';

interface HeaderProps {
  $scrolled?: boolean;
  $location?: string;
  $itemLocation?: string;
}

export const HeaderContainer = styled.div<HeaderProps>`
  position: sticky;
  top: 0;
  z-index: 9999;
  margin: 0 auto;
  transition: all ease 0.3s;

  ${({ $scrolled }) =>
    $scrolled
      ? css`
          width: 100%;
        `
      : css`
          width: 1312px;
          max-width: 100%;

          @media (max-width: 1420px) {
            padding: 0 2rem;
          }
        `}
`;

export const HeaderContent = styled.header<HeaderProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 16px 0;
  padding: 17.5px 24px;
  border-radius: 32px;
  border: 1px solid rgba(38, 37, 34, 0.24);
  transition: all ease 0.3s;

  ${({ $scrolled }) =>
    !$scrolled
      ? css`
          background-color: ${colors.Background};
        `
      : css`
          background-color: ${colors.Dark};
          width: 100%;
          border-radius: 0;
          box-shadow: 0px 0.375rem 0.5rem rgba(38, 37, 34, 0.1);
        `}
`;

export const LinkWrapper = styled.ul`
  display: flex;
  gap: 24px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 1019px) {
    display: none;
  }
`;

export const LinkStyled = styled.li<HeaderProps>`
  border-bottom: 3px solid transparent;
  border-radius: 2px;
  text-transform: uppercase;
  font-weight: 700;
  white-space: nowrap;
  transition: all ease-in 0.2s;

  ${({ $scrolled }) => css`
    color: ${$scrolled ? 'rgba(255, 255, 255, 0.4)' : 'rgba(38, 37, 34, 0.4)'};
  `}

  ${({ $location, $itemLocation, $scrolled }) =>
    $location === $itemLocation &&
    css`
      border-bottom-color: ${colors.PrimaryColor3};
      color: ${$scrolled ? colors.Light : colors.Dark};
    `}

  &:hover {
    cursor: pointer;
    border-bottom-color: ${colors.PrimaryColor3};

    ${({ $scrolled }) => css`
      color: ${$scrolled ? colors.Light : colors.Dark};
    `}
  }
`;

export const HamburgerIcon = styled(MdOutlineMenu as React.ComponentType)`
  font-size: 20px;
  color: ${colors.Dark};
`;

export const HamburgerMenuButton = styled.button<HeaderProps>`
  display: none;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border: none;
  border-radius: 16px;
  transition: background-color 0.3s ease;

  ${({ $scrolled }) => css`
    background-color: ${$scrolled
      ? 'rgba(255, 251, 242, 0.4)'
      : 'rgba(38, 37, 34, 0.15)'};
  `}

  &:hover {
    cursor: pointer;
    ${({ $scrolled }) => css`
      background-color: ${$scrolled
        ? 'rgba(255, 251, 242, 0.25)'
        : 'rgba(38, 37, 34, 0.3)'};
    `}
  }

  @media (max-width: 1019px) {
    display: flex;
  }
`;

export const SearchSubscribeContainer = styled.div`
  @media (max-width: 1019px) {
    display: none;
  }
`;
