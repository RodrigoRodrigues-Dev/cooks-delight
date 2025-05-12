import Title from '../Title';
import {
  ActionButton,
  CardWrapper,
  ContentArea,
  CardImage,
  TagVegan,
  DescriptionText,
  InfoSection,
  TagsLabel
} from './styled';

import { Link } from 'react-router-dom';

export type RecipesCardTypes = {
  $title?: string;
  $description?: string;
  $tags?: string;
  $img?: string;
  $category?: string;
  $recipeID?: string;
};

const RecipeCard = ({
  $description,
  $tags,
  $title,
  $img,
  $category,
  $recipeID
}: RecipesCardTypes) => {
  const formatTag = (tags?: string | null): string => {
    if (!tags) {
      return '';
    }
    return tags.replace(/,/g, ', ');
  };

  formatTag($tags);

  const tagArr = $tags?.split(',').slice(0, 3);

  return (
    <CardWrapper>
      <CardImage $img={$img} />
      <TagVegan
        $category={$category}
        src="https://cooks-delight-images.vercel.app/TagVegan.png"
        alt=""
      />
      <ContentArea>
        <Title $type="Small">{$title}</Title>
        <DescriptionText $type="secondary">
          {`${$description?.slice(0, 120)}...`}
        </DescriptionText>
        <InfoSection>
          <TagsLabel>
            {tagArr?.map((tag, index) => <span key={index}>{tag}. </span>)}
          </TagsLabel>
          <Link
            to={`/recipe/${$recipeID}`}
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              })
            }
          >
            <ActionButton $type="primary">view recipe</ActionButton>
          </Link>
        </InfoSection>
      </ContentArea>
    </CardWrapper>
  );
};

export default RecipeCard;
