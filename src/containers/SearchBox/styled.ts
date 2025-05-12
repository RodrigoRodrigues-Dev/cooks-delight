import styled from 'styled-components';
import colors from '../../styles/colors';
import { LuSearch } from 'react-icons/lu';
import { IoCloseCircle } from 'react-icons/io5';
import React from 'react';

type Props = {
  $boxVisibility: boolean;
};

export const SearchResultsContainer = styled.div<Props>`
  ${({ $boxVisibility }) =>
    $boxVisibility === false ? 'display: none;' : 'display: block;'}
`;

export const SearchModal = styled.div`
  z-index: 99999;
  position: absolute;
  top: 0;
  right: 0;
  min-height: 300px;
  max-height: auto;
  width: 100vw;
  padding: 32px 0;
  background-color: ${colors.Dark};
`;

export const Backdrop = styled.div`
  z-index: 9999;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(38, 37, 34, 0.6);
`;

export const SearchFormWrapper = styled.div`
  display: flex;
  gap: 12px;
  width: 600px;
  margin: 0 auto;
  margin-bottom: 16px;
  padding: 16px;
  border-radius: 24px;
  background-color: rgb(47, 47, 47);

  @media (max-width: 930px) {
    width: 80%;
  }
`;

export const CloseIconStyled = styled(IoCloseCircle as React.ComponentType)`
  color: ${colors.Light};
  font-size: 32px;

  &:hover {
    cursor: pointer;
    color: rgba(255, 251, 242, 0.5);
  }
`;

export const CloseButtonStyled = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const SearchIconStyled = styled(LuSearch as React.ComponentType)`
  font-size: 25px;
`;

export const SearchButtonStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 40px;
  height: 40px;
  border-radius: 50%;

  color: ${colors.Light};
  background-color: rgb(85, 85, 85);
`;

export const SearchInput = styled.input`
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 1px solid ${colors.Background};
  font-size: 20px;
  color: ${colors.Background};

  &:focus {
    outline: none;
  }
`;

export const RecipeList = styled.ul`
  overflow-y: scroll;
  margin: 0 auto;
  width: 900px;
  border-radius: 15px;
  padding: 16px;
  max-height: 200px;

  color: ${colors.Light};
  background-color: rgb(54, 54, 54);

  @media (max-width: 930px) {
    width: 95%;
  }

  &::-webkit-scrollbar {
    width: 12px;
    height: 12px;
  }

  &::-webkit-scrollbar-track {
    background: rgb(54, 54, 54);
    border-radius: 0 24px 24px 0px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: white;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
`;

export const RecipeListItem = styled.li`
  padding: 16px;
  color: ${colors.Light};

  &:hover {
    cursor: pointer;
    background-color: rgb(83, 83, 83);
    border-radius: 24px;
  }
`;
