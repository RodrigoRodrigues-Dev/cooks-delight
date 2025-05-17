import styled from 'styled-components';
import colors from '../../../styles/colors';
import { ParagraphStyled } from '../../../components/common/Paragraph/styles';

export const ExploreSectionContainer = styled.section`
  margin-top: 16px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 238px;
  padding: 40px;
  border-radius: 32px;
  background-color: ${colors.PrimaryColor4};

  @media (max-width: 1200px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 64px;
  }
`;

export const ParagraphExplore = styled(ParagraphStyled)`
  padding: 16px 0 40px 0;
`;

export const FilterList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FilterItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  padding: 16px 0;
  border-bottom: 1px solid rgba(38, 37, 34, 16%);
`;

export const FilterTextWrapper = styled.div`
  display: flex;
  align-items: end;
`;

export const FilterTextWrapperContent = styled.div``;

export const FilterWrapper = styled.div``;
