import styled from 'styled-components';
import { ParagraphStyled } from '../Paragraph/styled';
import { RecipesCardTypes } from './index';
import { ButtonStyled } from '../Button/styled';
import colors from '../../styles/colors';

export const CardWrapper = styled.div<RecipesCardTypes>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: relative;
  overflow: hidden;

  background-color: ${colors.Light};
  border: 1px solid rgba(38, 37, 34, 16%);
  border-radius: 32px;
`;

export const CardImage = styled.div<RecipesCardTypes>`
  background-size: cover;
  background-image: url(${({ $img }) => $img});
  height: 234px;
  width: 100%;
`;

export const TagVegan = styled.img<RecipesCardTypes>`
  display: none;
  position: absolute;
  right: 24px;
  top: 185px;

  ${({ $category }) => $category === 'Vegan' && 'display: block'}
`;

export const DescriptionText = styled(ParagraphStyled)`
  padding-top: 12px;
`;

export const InfoSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;

  @media (max-width: 1280px) {
    flex-direction: column;
    align-items: start;
    gap: 16px;
  }
`;

export const ActionButton = styled(ButtonStyled)`
  @media (max-width: 1280px) {
    width: 100%;
  }
`;

export const ContentArea = styled.div`
  padding: 24px 16px;
`;

export const TagsLabel = styled.p`
  font-weight: 700;
`;
