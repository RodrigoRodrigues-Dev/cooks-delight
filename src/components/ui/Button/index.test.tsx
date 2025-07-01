import { render, screen } from '@testing-library/react';
import Button from './index';

describe('Button', () => {
  it('renders with default type', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByText('Click me');
    expect(button).toBeInTheDocument();
  });

  it('renders with secondary type', () => {
    render(<Button $type="secondary">Secondary</Button>);
    const button = screen.getByText('Secondary');
    expect(button).toBeInTheDocument();
  });

  it('renders with tertiary type', () => {
    render(<Button $type="tertiary">Tertiary</Button>);
    const button = screen.getByText('Tertiary');
    expect(button).toBeInTheDocument();
  });
});
