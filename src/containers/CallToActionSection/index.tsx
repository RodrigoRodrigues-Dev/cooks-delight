import {
  CTASectionContainer,
  TextWrapper,
  CTASubtitle,
  CTATitle,
  CTAParagraph,
  CTAButton,
  InputWrapper,
  Input,
  ElipseTop,
  ElipseBottom
} from './styled';

const CTASection = () => (
  <CTASectionContainer id="cta-section">
    <ElipseTop
      src="https://cooks-delight-images.vercel.app/Ellipse.png"
      alt=""
    />
    <TextWrapper>
      <CTASubtitle>Subscribe</CTASubtitle>
      <CTATitle>
        Join the fun
        <br />
        Subscribe now!
      </CTATitle>
      <CTAParagraph>
        Subscribe to our newsletter for a weekly serving of recipes, cooking
        <br />
        tips, and exclusive insights straight to your inbox.
      </CTAParagraph>
    </TextWrapper>

    <InputWrapper>
      <Input type="email" placeholder="Email Address" />
      <CTAButton>Subscribe</CTAButton>
    </InputWrapper>
    <ElipseBottom
      src="https://cooks-delight-images.vercel.app/Ellipse.png"
      alt=""
    />
  </CTASectionContainer>
);

export default CTASection;
