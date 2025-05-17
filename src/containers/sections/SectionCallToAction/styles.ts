import styled from 'styled-components';
import colors from '../../../styles/colors';

export const CTASectionContainer = styled.section`
  position: relative;
  overflow: hidden;
  margin: 16px 0;
  background-color: ${colors.PrimaryColor3};
  border-radius: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 64px 16px;
`;

export const ElipseTop = styled.img`
  position: absolute;
  top: 0;
  width: 100%;
`;

export const ElipseBottom = styled.img`
  position: absolute;
  bottom: 0;
  width: 100%;
  transform: rotate(180deg);
`;

export const TextWrapper = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 16px;
  color: ${colors.Background};
`;

export const CTASubtitle = styled.span`
  text-transform: uppercase;
`;

export const CTATitle = styled.h3`
  text-transform: uppercase;
  font-size: 90px;
  font-weight: bolder;
  font-family: 'Montserrat', sans-serif;

  @media (max-width: 1020px) {
    font-size: 70px;
  }

  @media (max-width: 860px) {
    font-size: 50px;
  }

  @media (max-width: 760px) {
    font-size: 38px;
  }
`;

export const CTAParagraph = styled.p`
  font-size: 21px;
  text-align: center;

  @media (max-width: 760px) {
    font-size: 16px;
    padding: 0 16px;
  }
`;

export const InputWrapper = styled.div`
  z-index: 1;
  width: 426px;
  background-color: ${colors.Background};
  margin-top: 48px;
  border-radius: 24px;
  padding: 6px 8px;
  border: none;
  display: flex;

  &:focus {
    border: 2px solid ${colors.PrimaryColor3};
  }

  @media (max-width: 760px) {
    width: 90%;
    flex-direction: column;
    gap: 1rem;
    padding: 16px 8px;
  }
`;

export const Input = styled.input`
  background-color: transparent;
  border: none;
  width: 100%;
  padding: 0 16px;
  font-size: 21px;

  &::placeholder {
    font-size: 21px;
    color: rgb(38, 37, 34, 40%);
  }

  &:focus {
    outline: none;
  }
`;

export const CTAButton = styled.button`
  background-color: ${colors.Dark};
  color: ${colors.Background};
  border: none;
  border-radius: 24px;
  padding: 12px 24px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s;
  text-transform: uppercase;

  &:hover {
    background-color: rgb(38, 37, 34, 80%);
  }
`;
