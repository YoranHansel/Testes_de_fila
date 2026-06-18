import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import LinkPlanos from '../LinkPlanos';

describe('LinkPlanos', () => {
  test('Achar um link pelo papel — getByRole(link)', () => {
    render(<LinkPlanos />);
    const link = screen.getByRole('link', { name: /Ver planos/i });
    expect(link).toBeInTheDocument();
  });
});
