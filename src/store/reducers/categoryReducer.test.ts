import { categoryReducer, setCategory } from './categoryReducer';

describe('categoryReducer', () => {
  it('should return the initial state', () => {
    expect(categoryReducer(undefined, { type: '' })).toBe('All');
  });

  it('should handle setCategory', () => {
    expect(categoryReducer('All', setCategory('Desserts'))).toBe('Desserts');
    expect(categoryReducer('Desserts', setCategory('Main Dishes'))).toBe(
      'Main Dishes'
    );
  });
});
