import styled from 'styled-components';
import colors from '../../styles/colors';

export const TagStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 8px 0;
  padding: 4px 0;
  max-width: 85px;
  min-width: 85px;

  text-transform: uppercase;
  font-weight: 700;
  border-radius: 12px;
  color: ${colors.Background};
  background-color: ${colors.PrimaryColor3};
`;
