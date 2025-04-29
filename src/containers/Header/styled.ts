import styled from 'styled-components';
import colors from '../../styles/colors';
import { MdOutlineMenu } from 'react-icons/md';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 16px 0;
  padding: 17.5px 24px;
  border-radius: 32px;
  border: 1px solid rgb(38, 37, 34, 24%);
`;

export const LinkWrapper = styled.ul`
  display: flex;
  gap: 24px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 1020px) {
    display: none;
  }
`;

export const Link = styled.li`
  border-radius: 2px;
  border-bottom: 3px solid transparent;

  text-decoration: none;
  color: rgb(38, 37, 34, 40%);
  text-transform: uppercase;
  font-weight: 700;

  &:hover {
    border-bottom: 3px solid ${colors.PrimaryColor3};
    cursor: pointer;

    color: ${colors.Dark};
  }
`;

export const HamburgerIcon = styled(MdOutlineMenu as React.ComponentType)`
  font-size: 20px;
  color: ${colors.Dark};
`;

export const HamburgerMenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 16px;
  background-color: rgb(38, 37, 34, 15%);
  height: 34px;
  width: 34px;
  display: none;

  &:hover {
    background-color: rgb(38, 37, 34, 30%);
    cursor: pointer;
  }

  @media (max-width: 1020px) {
    display: flex;
  }
`;
