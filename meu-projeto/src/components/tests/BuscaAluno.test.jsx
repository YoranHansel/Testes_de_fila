import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BuscaAluno from '../BuscaAluno';

describe('BuscaAluno', () => {
  test('Digitar, clicar e conferir a resposta', async () => {
    const user = userEvent.setup();
    render(<BuscaAluno />);
    
    const input = screen.getByLabelText('Nome');
    const button = screen.getByRole('button', { name: /Buscar/i });
    
    await user.type(input, 'Ana');
    await user.click(button);
    
    const resultado = screen.getByText('Ficha de Ana');
    expect(resultado).toBeInTheDocument();
  });
});
