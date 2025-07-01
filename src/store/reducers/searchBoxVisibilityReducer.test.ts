import {
  searchBoxVisibilityReducer,
  setSearchBoxVisibility
} from './searchBoxVisibilityReducer';

describe('searchBoxVisibilityReducer', () => {
  it('should return the initial state', () => {
    expect(searchBoxVisibilityReducer(undefined, { type: '' })).toEqual({
      isVisible: false
    });
  });

  it('should handle setSearchBoxVisibility', () => {
    expect(
      searchBoxVisibilityReducer(
        { isVisible: false },
        setSearchBoxVisibility(true)
      )
    ).toEqual({ isVisible: true });
    expect(
      searchBoxVisibilityReducer(
        { isVisible: true },
        setSearchBoxVisibility(false)
      )
    ).toEqual({ isVisible: false });
  });
});
