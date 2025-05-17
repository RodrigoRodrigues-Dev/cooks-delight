import { useParams } from 'react-router-dom';
import { useGetRecipesIDQuery } from '../../services/api';

import FeaturedSection from '../../containers/sections/SectionFeatured';

import Paragraph from '../../components/common/Paragraph';
import Tag from '../../components/ui/Tag';
import Title from '../../components/common/Title';

import {
  RecipeWrapper,
  RecipeTextSection,
  TextParagraph,
  StyledRecipeImage,
  RecipeDetailsGrid,
  InfosLeft,
  InfosRight,
  InfoCard,
  InfoCardTitle,
  CardList,
  InfoCardItem,
  StyledHomeButton
} from './styles';

interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strInstructions: string;
  strTags: string;
  strCategory: string;
}

const Recipe: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: recipe } = useGetRecipesIDQuery(id!);
  const meals: Meal[] = recipe?.meals ?? [];

  const getIngredients = (items: Meal[]): string[] => {
    const ingredients: string[] = [];

    items.forEach(item => {
      for (let i = 1; i <= 20; i++) {
        const ingKey = `strIngredient${i}`;
        const measKey = `strMeasure${i}`;
        const ingredient = (item as unknown as Record<string, string>)[ingKey];
        const measure = (item as unknown as Record<string, string>)[measKey];
        if (ingredient) {
          ingredients.push(`${ingredient} (${measure || ''})`);
        }
      }
    });

    return ingredients;
  };

  const ingredients = getIngredients(meals);

  return (
    <>
      <RecipeWrapper>
        {meals.length > 0 ? (
          <>
            <RecipeTextSection>
              <Tag>Recipe</Tag>
              <Title $type="Big">{meals[0].strMeal}</Title>
              <TextParagraph $size={21} $type="secondary">
                Welcome to Cooks Delight, where culinary dreams come alive!
                Today, we embark on a journey of flavors with a dish that
                promises to elevate your dining experience – {meals[0].strMeal}
              </TextParagraph>
            </RecipeTextSection>

            <StyledRecipeImage
              src={meals[0].strMealThumb}
              alt={meals[0].strMeal}
            />

            <RecipeDetailsGrid>
              <InfosLeft>
                <Paragraph $size={16} $type="secondary">
                  {meals[0].strInstructions}
                </Paragraph>
              </InfosLeft>

              <InfosRight>
                <InfoCard>
                  <InfoCardTitle>Ingredients</InfoCardTitle>
                  <CardList>
                    {ingredients.map((item, index) => (
                      <InfoCardItem key={index}>{item}</InfoCardItem>
                    ))}
                  </CardList>
                </InfoCard>
              </InfosRight>
            </RecipeDetailsGrid>
          </>
        ) : (
          <>
            <h2>Recipe not found!</h2>
            <StyledHomeButton>Go Home!</StyledHomeButton>
          </>
        )}
      </RecipeWrapper>

      <FeaturedSection />
    </>
  );
};

export default Recipe;
