import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import CarregadorFicha from '../CarregadorFicha';

describe('CarregadorFicha', () => {
  test('Esperar o que aparece depois — findBy', async () => {
    render(<CarregadorFicha />);
    
    const message = await screen.findByText('Ficha pronta!');
    expect(message).toBeInTheDocument();
  });
});
