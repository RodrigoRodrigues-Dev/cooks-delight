import styled, { css } from 'styled-components';
import { LuSearch } from 'react-icons/lu';
import colors from '../../styles/colors';

type ButtonWrapperProps = {
  $main: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  display: flex;
  align-items: center;
  gap: 16px;

  @media (max-width: 1020px) {
    display: ${({ $main }) => $main && 'none'};
  }
`;

const searchIconStyles = ({ $main }: ButtonWrapperProps) => css`
  color: ${$main ? 'rgb(38, 37, 34)' : 'rgb(255, 251, 242)'};
  font-size: 20px;
`;

export const SearchIcon = styled(
  LuSearch as React.ComponentType
)<ButtonWrapperProps>`
  ${searchIconStyles}
`;

const searchButtonBg = ($main: boolean, hover = false) => {
  if ($main) {
    return hover
      ? 'background-color: rgba(38, 37, 34, 0.24);'
      : 'background-color: rgba(38, 37, 34, 0.08);';
  }
  return hover
    ? 'background-color: rgba(255, 251, 242, 0.35);'
    : 'background-color: rgba(255, 251, 242, 0.16);';
};

export const SearchButton = styled.button<ButtonWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 37px;
  height: 37px;

  border: none;
  border-radius: 16px;
  ${({ $main }) => searchButtonBg($main)}

  &:hover {
    ${({ $main }) => searchButtonBg($main, true)}
    cursor: pointer;
  }
`;

const subscribeButtonBg = ($main: boolean, hover = false) => {
  if ($main) {
    return hover
      ? 'background-color: rgba(38, 37, 34, 0.9);'
      : 'background-color: rgb(38, 37, 34);';
  }
  return hover
    ? 'background-color: rgba(255, 251, 242, 0.35);'
    : 'background-color: rgba(255, 251, 242, 0.16);';
};

export const SubscribeButton = styled.button<ButtonWrapperProps>`
  padding: 12px 24px;

  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;

  border: none;
  border-radius: 24px;
  color: ${colors.Background};

  ${({ $main }) => subscribeButtonBg($main)}
  width: ${({ $main }) => ($main ? 'auto' : '100%')};

  &:hover {
    ${({ $main }) => subscribeButtonBg($main, true)}
    cursor: pointer;
  }
`;
