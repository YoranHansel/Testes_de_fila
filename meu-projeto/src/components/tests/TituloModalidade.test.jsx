import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import TituloModalidade from '../TituloModalidade';

describe('TituloModalidade', () => {
  test('Achar um título pelo papel — getByRole(heading)', () => {
    render(<TituloModalidade />);
    const heading = screen.getByRole('heading', { name: /Aula de spinning/i });
    expect(heading).toBeInTheDocument();
  });
});
