import styled from 'styled-components';

export type LogoNameProps = {
  color?: 'main' | 'light';
};

export const LogoContent = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const LogoName = styled.p<LogoNameProps>`
  font-weight: bold;
  font-size: 15px;
  letter-spacing: 0.5px;
  color: ${({ color }) => (color === 'main' ? 'black' : 'white')};
`;
