import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LiberacaoVisitante from '../LiberacaoVisitante';

describe('LiberacaoVisitante', () => {
  test('O acesso só libera com os dois campos preenchidos', async () => {
    const user = userEvent.setup();
    render(<LiberacaoVisitante />);
    
    const visitanteInput = screen.getByLabelText('Visitante');
    const documentoInput = screen.getByLabelText('Documento');
    const button = screen.getByRole('button', { name: /Liberar/i });
    
    // Primeira fase: clique sem dados (um vazio)
    await user.click(button);
    const avisoVazio = screen.getByText('Informe os dados');
    expect(avisoVazio).toBeInTheDocument();
    
    // Segunda fase: preencher os dois campos
    await user.type(visitanteInput, 'João');
    await user.type(documentoInput, '12345678');
    await user.click(button);
    
    const acessoLiberado = screen.getByText('Acesso liberado');
    expect(acessoLiberado).toBeInTheDocument();
  });
});
