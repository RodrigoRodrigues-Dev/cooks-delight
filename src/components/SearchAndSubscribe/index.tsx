import {
  ButtonWrapper,
  SearchButton,
  SearchIcon,
  SubscribeButton
} from './styled';

type ButtonWrapperProps = {
  $main: boolean;
};

export const SearchSubscribeWrapper = ({ $main }: ButtonWrapperProps) => (
  <ButtonWrapper $main={$main}>
    <SearchButton $main={$main}>
      <SearchIcon $main={$main} />
    </SearchButton>
    <SubscribeButton $main={$main}>Subscribe</SubscribeButton>
  </ButtonWrapper>
);
