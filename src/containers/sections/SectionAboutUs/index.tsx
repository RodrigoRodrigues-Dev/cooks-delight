import Button from '../../../components/ui/Button';
import Tag from '../../../components/ui/Tag';
import Title from '../../../components/common/Title';

import {
  AboutUsWrapper,
  TextWrapper,
  Image1,
  Image2,
  Image3,
  ParagraphAbout
} from './styles';

const AboutUsSection = () => (
  <AboutUsWrapper id="about-us-section">
    <TextWrapper>
      <Tag>About Us</Tag>
      <Title $type="Medium">Our Culinary Chronicle</Title>
      <ParagraphAbout $type="secondary" $size={16}>
        Our journey is crafted with dedication, creativity, and an unrelenting
        commitment to delivering delightful culinary experiences. Join us in
        savoring the essence of every dish and the stories that unfold.
      </ParagraphAbout>
      <Button>Read more</Button>
    </TextWrapper>
    <Image1 />
    <Image2 />
    <Image3 />
  </AboutUsWrapper>
);

export default AboutUsSection;
