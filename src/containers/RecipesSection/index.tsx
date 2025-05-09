import React, { useEffect, useState, useCallback, useMemo } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../store';
import { setCategory } from '../../store/reducers/categoryReducer';

import {
  useGetRandomSelectionQuery,
  useGetRecipesCategoryQuery
} from '../../services/api';

import Tag from '../../components/Tag';
import Title from '../../components/Title';
import Paragraph from '../../components/Paragraph';
import RecipeCard from '../../components/RecipeCard';

import {
  RecipesWrapper,
  RecipesHeader,
  TextWrapper,
  TabWrapper,
  TabButton,
  CardsWrapper
} from './styled';

interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strInstructions: string;
  strTags: string;
  strCategory: string;
}

type ApiResponse = { meals: Meal[] };

const RecipesSection: React.FC = () => {
  const { data: recipes } = useGetRandomSelectionQuery();
  const categorySet = useSelector((state: RootState) => state.category);
  const { data: recipesCategory } = useGetRecipesCategoryQuery(categorySet);
  const [dataRecipes, setDataRecipes] = useState<Meal[]>([]);
  const dispatch = useDispatch();

  const categoryNames = [
    'All',
    'Vegan',
    'Breakfast',
    'Starter',
    'Miscellaneous',
    'Dessert',
    'Side'
  ];

  const chuckRecipes = useCallback(
    async (recipesToFetch: Meal[]): Promise<Meal[]> => {
      if (!recipesToFetch.length) return [];

      const flatRecipes = recipesToFetch.flat();

      const fetchPromises: Promise<Meal[]>[] = flatRecipes.map(({ idMeal }) =>
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
          .then(res => {
            if (!res.ok) throw new Error('Erro na resposta');
            return res.json() as Promise<ApiResponse>;
          })
          .then(json => json.meals)
      );

      const allMealsArrays: Meal[][] = await Promise.all(fetchPromises);
      return allMealsArrays.flat();
    },
    []
  );

  const meals = useMemo(() => {
    return categorySet === 'All'
      ? (recipes?.meals ?? [])
      : (recipesCategory?.meals ?? []);
  }, [categorySet, recipes?.meals, recipesCategory?.meals]);

  const renderNineRecipes = useMemo(() => meals.slice(0, 9), [meals]);

  useEffect(() => {
    if (renderNineRecipes.length === 0) return;

    chuckRecipes(renderNineRecipes)
      .then(mealsArray => {
        setDataRecipes(mealsArray);
      })
      .catch(err => {
        console.error('Erro ao buscar receitas:', err);
      });
  }, [renderNineRecipes, chuckRecipes]);

  return (
    <RecipesWrapper>
      <RecipesHeader>
        <TextWrapper>
          <Tag>Recipes</Tag>
          <Title $type="Medium">Embark on a journey</Title>
          <Paragraph $type="secondary">
            With our diverse collection of recipes we have something to satisfy
            every palate.
          </Paragraph>
        </TextWrapper>
        <TabWrapper>
          {categoryNames.map((category, index) => (
            <div key={index} onClick={() => dispatch(setCategory(category))}>
              <TabButton
                $category={category}
                $categorySet={categorySet}
                $type="primary"
              >
                {category}
              </TabButton>
            </div>
          ))}
        </TabWrapper>
      </RecipesHeader>
      <CardsWrapper>
        {dataRecipes.map(meal => (
          <RecipeCard
            key={meal.idMeal}
            $img={meal.strMealThumb}
            $title={meal.strMeal}
            $description={meal.strInstructions}
            $tags={meal.strTags}
            $category={meal.strCategory}
          />
        ))}
      </CardsWrapper>
    </RecipesWrapper>
  );
};

export default RecipesSection;
