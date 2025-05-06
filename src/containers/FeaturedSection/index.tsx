import { useState } from 'react';
import RecipeCard from '../../components/RecipeCard';
import Title from '../../components/Title';
import { useGetMealsQuery } from '../../services/api';
import {
  FeaturedWrapper,
  FeaturedNavigation,
  NavControls,
  NextBtn,
  PrevBtn,
  SliderContainer,
  SliderContent
} from './styled';

interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strInstructions: string;
  strTags: string;
  strCategory: string;
}

const FeaturedSection = () => {
  const { data: latest } = useGetMealsQuery();
  const [stateSlide, setStateSlide] = useState(0);

  const meals = latest?.meals ?? [];

  function chunkIntoPairs(arr: Meal[]) {
    const result = [];
    for (let i = 0; i < arr.length; i += 2) {
      result.push([arr[i], arr[i + 1] ?? null]);
    }
    return result;
  }

  const pairedMeals = chunkIntoPairs(meals);

  const nextSlide = () => {
    if (stateSlide < pairedMeals.length * 100 - 100) {
      setStateSlide(stateSlide + 100);
    }
  };

  const prevSlide = () => {
    if (stateSlide > 0) {
      setStateSlide(stateSlide - 100);
    }
  };

  return (
    <FeaturedWrapper>
      <FeaturedNavigation>
        <Title $type="Medium">featured recipes</Title>
        <NavControls>
          <div onClick={prevSlide}>
            <PrevBtn $state={stateSlide} $pairedMealsAmt={0} />
          </div>
          <div onClick={nextSlide}>
            <NextBtn $state={stateSlide} $pairedMealsAmt={pairedMeals.length} />
          </div>
        </NavControls>
      </FeaturedNavigation>
      <SliderContent>
        {pairedMeals.map((pair, idx) => (
          <SliderContainer $state={stateSlide} key={idx} $pairedMealsAmt={0}>
            {pair.map(
              meal =>
                meal && (
                  <RecipeCard
                    key={meal.idMeal}
                    $img={meal.strMealThumb}
                    $title={meal.strMeal}
                    $description={meal.strInstructions}
                    $tags={meal.strTags}
                    $category={meal.strCategory}
                  />
                )
            )}
          </SliderContainer>
        ))}
      </SliderContent>
    </FeaturedWrapper>
  );
};

export default FeaturedSection;
