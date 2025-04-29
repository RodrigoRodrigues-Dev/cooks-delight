import Button from '../../components/Button';
import Title from '../../components/Title';
import { HeroSectionContainer, HeroTextWrapper, TextWrapper } from './styled';

const HeroSection = () => (
  <HeroSectionContainer>
    <HeroTextWrapper>
      <Title>Unleash Culinary Excellence</Title>
      <TextWrapper $size={21} $type="tertiary">
        Explore a world of flavors, discover handcrafted recipes, and let the
        aroma of our passion for cooking fill your kitchen
      </TextWrapper>
      <Button $type="secondary">explore recipes</Button>
    </HeroTextWrapper>
  </HeroSectionContainer>
);

export default HeroSection;
