import styled from 'styled-components';
import { ParagraphProps } from './index';
import colors from '../../styles/colors';

export const ParagraphStyled = styled.p<ParagraphProps>`
  font-size: ${({ $size }) => ($size ? `${$size}px` : '16px')};

  ${({ $type }) => $type === 'primary' && `color: ${colors.Dark};`}

  ${({ $type }) => $type === 'secondary' && `color: rgba(51, 51, 51, 80%);`}

  ${({ $type }) => $type === 'tertiary' && `color: ${colors.Background};`}
`;
