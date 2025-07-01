import { render, screen } from '@testing-library/react';
import Logo from './index';

const logoSrc = {
  main: 'https://cooks-delight-images.vercel.app/Logo40.png',
  light: 'https://cooks-delight-images.vercel.app/Logo40Light.png'
};

describe('Logo component', () => {
  it('should render the default logo image with correct src and alt', () => {
    render(<Logo />);
    const img = screen.getByRole('img', { name: /cooks delight logo/i });
    expect(img).toHaveAttribute('src', logoSrc.main);
    expect(img).toHaveAttribute('alt', 'Cooks Delight Logo');
  });

  it('should render the light-version logo image when logo="light"', () => {
    render(<Logo logo="light" />);
    const img = screen.getByRole('img', { name: /cooks delight logo/i });
    expect(img).toHaveAttribute('src', logoSrc.light);
  });

  it('should render the logo text with the correct color prop', () => {
    render(<Logo color="light" />);
    const text = screen.getByText(/Cooks\s+Delight/i);
    expect(text).toBeInTheDocument();
  });
});
