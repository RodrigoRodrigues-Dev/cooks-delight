import styled from 'styled-components';
import { ButtonStyled } from '../../components/Button/styled';
import colors from '../../styles/colors';

export const RecipesWrapper = styled.section`
  margin: 80px 0;
`;

export const RecipesHeader = styled.div``;

export const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  margin: 0 auto;
  text-align: center;
  width: 426px;

  @media (max-width: 830px) {
    width: 100%;
  }
`;

export const TabWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 40px;
`;

type ButtonProps = {
  $category: string;
  $categorySet: string;
};

export const TabButton = styled(ButtonStyled)<ButtonProps>`
  ${({ $category, $categorySet }) =>
    $category === $categorySet &&
    `background-color: ${colors.PrimaryColor1}; &:hover {background-color: rgba(159, 220, 38, 0.7);}`}
`;

export const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 24px;
  column-gap: 16px;
  margin-top: 40px;

  @media (max-width: 1280px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 830px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
