import { HashLink } from 'react-router-hash-link';

import Button from '../../../components/ui/Button';
import Title from '../../../components/common/Title';

import {
  HeroSectionContainer,
  HeroTextWrapper,
  TextWrapper,
  RecipesSectionLink
} from './styles';

const HeroSection = () => (
  <HeroSectionContainer id="hero-section">
    <HeroTextWrapper>
      <Title>Unleash Culinary Excellence</Title>
      <TextWrapper $size={21} $type="tertiary">
        Explore a world of flavors, discover handcrafted recipes, and let the
        aroma of our passion for cooking fill your kitchen
      </TextWrapper>
      <RecipesSectionLink>
        <HashLink
          smooth
          scroll={el => {
            window.scrollTo({ top: el.offsetTop - 95, behavior: 'smooth' });
          }}
          to="/#recipes-section"
        >
          <Button $type="secondary">explore recipes</Button>
        </HashLink>
      </RecipesSectionLink>
    </HeroTextWrapper>
  </HeroSectionContainer>
);

export default HeroSection;
