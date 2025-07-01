import { render, screen } from '@testing-library/react';
import Tag from './index';

describe('Tag', () => {
  it('renders with default type', () => {
    render(<Tag>Default Tag</Tag>);
    const tag = screen.getByText('Default Tag');
    expect(tag).toBeInTheDocument();
  });

  it('does not render anything when children are undefined', () => {
    const { container } = render(<Tag />);
    expect(container.firstChild).toBeEmptyDOMElement();
  });
});
