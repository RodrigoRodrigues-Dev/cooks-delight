import { useDispatch } from 'react-redux';
import { setSearchBoxVisibility } from '../../store/reducers/searchBoxVisibilityReducer';

import {
  ButtonWrapper,
  SearchButton,
  SearchIcon,
  SubscribeButton
} from './styled';

type ButtonWrapperProps = {
  $main: boolean;
};

export const SearchSubscribeWrapper = ({ $main }: ButtonWrapperProps) => {
  const dispatch = useDispatch();

  return (
    <ButtonWrapper $main={$main}>
      <SearchButton
        $main={$main}
        onClick={() => dispatch(setSearchBoxVisibility(true))}
      >
        <SearchIcon $main={$main} />
      </SearchButton>

      <SubscribeButton $main={$main}>Subscribe</SubscribeButton>
    </ButtonWrapper>
  );
};
