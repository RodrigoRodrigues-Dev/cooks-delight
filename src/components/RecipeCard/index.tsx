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

export type RecipesCardTypes = {
  $title?: string;
  $description?: string;
  $tags?: string;
  $img?: string;
  $category?: string;
};

const RecipeCard = ({
  $description,
  $tags,
  $title,
  $img,
  $category
}: RecipesCardTypes) => {
  const formatTag = (tags?: string | null): string => {
    if (!tags) {
      return '';
    }
    return tags.replace(/,/g, ', ');
  };

  formatTag($tags);

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
          <TagsLabel>{formatTag($tags)}</TagsLabel>
          <ActionButton $type="primary">view recipe</ActionButton>
        </InfoSection>
      </ContentArea>
    </CardWrapper>
  );
};

export default RecipeCard;
