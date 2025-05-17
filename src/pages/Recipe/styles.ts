import styled from 'styled-components';
import { ParagraphStyled } from '../../components/common/Paragraph/styles';
import { ButtonStyled } from '../../components/ui/Button/styles';
import colors from '../../styles/colors';

export const RecipeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid rgba(38, 37, 34, 24%);
  border-radius: 32px;
  padding: 60px 40px;

  @media (max-width: 1280px) {
    padding: 20px 16px;
  }
`;

export const RecipeTextSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  width: 1000px;

  @media (max-width: 1180px) {
    width: 95%;
  }
`;

export const TextParagraph = styled(ParagraphStyled)`
  width: 648px;
  margin-bottom: 40px;

  @media (max-width: 1180px) {
    width: 95%;
  }
`;

export const StyledRecipeImage = styled.img`
  width: auto;
  border-radius: 32px;
  max-height: 700px;

  @media (max-width: 830px) {
    width: 100%;
  }
`;

export const RecipeDetailsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 428px;
  gap: 141px;
  padding: 16px 71px;
  margin-top: 30px;

  @media (max-width: 1280px) {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  @media (max-width: 880px) {
    padding: 16px 20px;
  }
`;

export const InfosLeft = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;
`;

export const InfosRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;

  @media (max-width: 1280px) {
    margin-top: 30px;
  }
`;

export const InfoCard = styled.div`
  border: 1px solid rgba(38, 37, 34, 24%);
  border-radius: 24px;
  padding: 16px;
  width: 428px;
  background-color: ${colors.Light};

  @media (max-width: 1280px) {
    margin: 0 auto;
    width: 400px;
  }

  @media (max-width: 680px) {
    width: 100%;
  }
`;

export const InfoCardTitle = styled.h2`
  color: ${colors.PrimaryColor3};
`;

export const CardList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 5px;
  margin-top: 16px;
  font-weight: 600;
`;

export const InfoCardItem = styled.li``;

export const StyledHomeButton = styled(ButtonStyled)`
  margin-top: 20px;
`;
