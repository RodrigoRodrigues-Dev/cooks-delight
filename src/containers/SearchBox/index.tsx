import { useState } from 'react';
import { useGetRecipeSearchQuery } from '../../services/api';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchBoxVisibility } from '../../store/reducers/searchBoxVisibilityReducer';
import type { RootState } from '../../store';

import {
  SearchResultsContainer,
  SearchModal,
  Backdrop,
  SearchFormWrapper,
  SearchButtonStyled,
  SearchIconStyled,
  SearchInput,
  CloseIconStyled,
  CloseButtonStyled,
  RecipeList,
  RecipeListItem
} from './styled';

const SearchBox = () => {
  const [name, setName] = useState('');
  const { data: recipes } = useGetRecipeSearchQuery(name);

  const searchBoxVisibility = useSelector(
    (state: RootState) => state.searchBoxVisibility.isVisible
  );

  const dispacth = useDispatch();

  interface Meal {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
    strInstructions: string;
    strTags: string;
    strCategory: string;
  }

  const meals: Meal[] = recipes?.meals ?? [];

  console.log(meals);
  return (
    <SearchResultsContainer $boxVisibility={searchBoxVisibility}>
      <SearchModal>
        <CloseButtonStyled
          onClick={() => dispacth(setSearchBoxVisibility(false))}
        >
          <CloseIconStyled />
        </CloseButtonStyled>
        <SearchFormWrapper>
          <SearchButtonStyled>
            <SearchIconStyled />
          </SearchButtonStyled>
          <SearchInput
            type="text"
            name=""
            id=""
            onChange={e => setName(e.target.value)}
          />
        </SearchFormWrapper>
        <RecipeList>
          {meals.length > 0 ? (
            <>
              {meals?.map((item, key) => (
                <Link
                  onClick={() => dispacth(setSearchBoxVisibility(false))}
                  key={key}
                  to={`/recipe/${item.idMeal}`}
                >
                  <RecipeListItem>{item.strMeal}</RecipeListItem>
                </Link>
              ))}
            </>
          ) : (
            <span>Recipe not found!</span>
          )}
        </RecipeList>
      </SearchModal>
      <Backdrop onClick={() => dispacth(setSearchBoxVisibility(false))} />
    </SearchResultsContainer>
  );
};

export default SearchBox;
