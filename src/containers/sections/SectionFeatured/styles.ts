import styled, { css } from 'styled-components';
import colors from '../../../styles/colors';
import { MdOutlineNavigateNext } from 'react-icons/md';
import { GrFormPrevious } from 'react-icons/gr';

export const FeaturedWrapper = styled.section`
  border: 1px solid rgba(38, 37, 34, 24%);
  border-radius: 32px;

  margin-top: 16px;
  padding: 40px 16px;
`;

export const FeaturedNavigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 16px;
  margin-bottom: 40px;
`;

export const NavControls = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const navButtonStyles = css`
  border: 1px solid ${colors.Dark};
  border-radius: 50%;
  font-size: 40px;

  &:hover {
    cursor: pointer;
  }
`;

export type Props = {
  $state?: number;
  $pairedMealsAmt: number;
};

export const NextBtn = styled(
  MdOutlineNavigateNext as React.ComponentType
)<Props>`
  ${navButtonStyles}

  ${({ $state, $pairedMealsAmt }) =>
    $state === $pairedMealsAmt * 100 - 100 &&
    `opacity: 0.6; &:hover {
    cursor: auto;`}
`;

export const PrevBtn = styled(GrFormPrevious as React.ComponentType)<Props>`
  ${navButtonStyles}

  ${({ $state }) =>
    $state === 0 &&
    `opacity: 0.6;   &:hover {
    cursor: auto;
  };`}
`;

export const SliderContainer = styled.div<Props>`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  min-width: 1275px;
  transition: all ease-in-out 0.5s;

  transform: translateX(${({ $state }) => `-${$state}%`});

  @media (max-width: 1420px) {
    min-width: 100%;
  }

  @media (max-width: 1280px) {
    display: flex;
    flex-direction: column;
  }
`;

export const SliderContent = styled.div`
  display: flex;
  margin-right: 3px;

  overflow-x: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
`;
