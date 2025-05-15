import styled from 'styled-components';
import colors from '../../styles/colors';
import { ParagraphStyled } from '../../components/Paragraph/styled';

export const HeroSectionContainer = styled.section`
  z-index: 1;
  position: relative;
  overflow: hidden;
  background-image: url(https://cooks-delight-images.vercel.app/HeroSection.png);
  background-size: cover;
  background-position: center;
  height: 577px;
  border-radius: 32px;
  color: ${colors.Background};

  &::after {
    content: '';

    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: ${colors.Dark};
    opacity: 0.6;
  }
`;

export const RecipesSectionLink = styled.div`
  z-index: 1;
`;

export const HeroTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;
  height: 100%;
  width: 100%;
  border-radius: 32px;
`;

export const TextWrapper = styled(ParagraphStyled)`
  z-index: 1;
  width: 427px;
  text-align: center;
  padding: 12px 0 40px 0;

  @media (max-width: 760px) {
    font-size: 16px;
    width: 90%;
    padding: 12px 16px 40px 16px;
  }
`;
