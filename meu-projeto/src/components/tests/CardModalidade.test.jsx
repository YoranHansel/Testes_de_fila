import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import CardModalidade from '../CardModalidade';

describe('CardModalidade', () => {
  test('O título e o botão aparecem juntos', () => {
    render(<CardModalidade />);
    
    const heading = screen.getByRole('heading', { name: /Musculação/i });
    const button = screen.getByRole('button', { name: /Agendar/i });
    
    expect(heading).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
