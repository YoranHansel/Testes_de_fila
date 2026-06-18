import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BotaoCancelar from '../BotaoCancelar';

describe('BotaoCancelar', () => {
  test('Espionar o callback com jest.fn', async () => {
    const user = userEvent.setup();
    const mockOnCancelar = jest.fn();
    render(<BotaoCancelar onCancelar={mockOnCancelar} />);
    
    // Antes do clique
    expect(mockOnCancelar).not.toHaveBeenCalled();
    
    // Depois do clique
    const button = screen.getByRole('button', { name: /Cancelar matrícula/i });
    await user.click(button);
    
    expect(mockOnCancelar).toHaveBeenCalledTimes(1);
  });
});
