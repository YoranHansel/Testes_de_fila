import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ConfirmacaoAula from '../ConfirmacaoAula';

describe('ConfirmacaoAula', () => {
  test('O aviso só aparece depois do clique', async () => {
    const user = userEvent.setup();
    render(<ConfirmacaoAula />);
    
    // Antes do clique
    let aviso = screen.queryByText('Aula confirmada!');
    expect(aviso).not.toBeInTheDocument();
    
    // Depois do clique
    const button = screen.getByRole('button', { name: /Confirmar aula/i });
    await user.click(button);
    
    aviso = screen.getByText('Aula confirmada!');
    expect(aviso).toBeInTheDocument();
  });
});
