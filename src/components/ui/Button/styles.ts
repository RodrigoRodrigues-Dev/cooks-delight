import styled from 'styled-components';
import colors from '../../../styles/colors';
import { ButtonProps } from './index';

export const ButtonStyled = styled.button<ButtonProps>`
  z-index: 99;
  padding: 12px 24px;

  border-radius: 24px;
  border: none;

  text-transform: uppercase;
  transition: all 0.2s ease-in-out;

  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.5px;

  ${({ $type }) =>
    $type === 'primary' &&
    `background-color: transparent; border: 1px solid ${colors.Dark};`}

  ${({ $type }) =>
    $type === 'secondary' && `background-color: ${colors.PrimaryColor2};`}

${({ $type }) =>
    $type === 'tertiary' &&
    `background-color: transparent; border: 1px solid ${colors.Dark}; opacity: 0.4;`}

  &:hover {
    cursor: pointer;

    ${({ $type }) =>
      $type === 'primary' && `background-color: rgba(38, 37, 34, 10%);`}

    ${({ $type }) =>
      $type === 'secondary' && `background-color: rgba(242, 156, 51, 80%);`}

${({ $type }) =>
      $type === 'tertiary' &&
      `background-color: transparent; border: 1px solid ${colors.Dark}; opacity: 1;`}
  }
`;
