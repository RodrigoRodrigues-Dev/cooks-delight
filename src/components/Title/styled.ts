import styled from 'styled-components';

type TitleProps = {
  $type?: 'Big' | 'Medium' | 'Small';
};

export const TitleStyled = styled.h2<TitleProps>`
  z-index: 999;
  text-transform: uppercase;
  font-size: ${({ $type }) =>
    $type === 'Big' ? '90px' : $type === 'Medium' ? '40px' : '24px'};
  font-weight: bolder;
  font-family: 'Montserrat', sans-serif;

  @media (max-width: 1020px) {
    font-size: ${({ $type }) =>
      $type === 'Big' ? '70px' : $type === 'Medium' ? '40px' : '24px'};
  }

  @media (max-width: 860px) {
    font-size: ${({ $type }) =>
      $type === 'Big' ? '50px' : $type === 'Medium' ? '32px' : '24px'};
  }

  @media (max-width: 760px) {
    font-size: ${({ $type }) =>
      $type === 'Big' ? '38px' : $type === 'Medium' ? '26px' : '16px'};
  }
`;
