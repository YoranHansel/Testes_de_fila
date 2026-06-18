import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContadorVagas from '../ContadorVagas';

describe('ContadorVagas', () => {
  test('Reservar baixa uma vaga e troca a faixa', async () => {
    const user = userEvent.setup();
    render(<ContadorVagas />);
    
    const button = screen.getByRole('button', { name: /Reservar vaga/i });
    await user.click(button);
    
    const vagas = screen.getByText('Vagas: 5');
    const faixa = screen.getByText('Poucas vagas');
    
    expect(vagas).toBeInTheDocument();
    expect(faixa).toBeInTheDocument();
  });
});
