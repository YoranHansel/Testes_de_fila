import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PainelAgendamentos from '../PainelAgendamentos';

describe('PainelAgendamentos', () => {
  test('O painel de agendamentos confirma com o total certo', async () => {
    const user = userEvent.setup();
    const mockOnConfirmar = jest.fn();
    render(<PainelAgendamentos onConfirmar={mockOnConfirmar} />);
    
    const addButton = screen.getByRole('button', { name: /Adicionar horário/i });
    const confirmButton = screen.getByRole('button', { name: /Confirmar agenda/i });
    
    // Adicionar 2 horários
    await user.click(addButton);
    await user.click(addButton);
    
    // Verificar que mostra "Agendados: 2"
    const agendados = screen.getByText('Agendados: 2');
    expect(agendados).toBeInTheDocument();
    
    // Confirmar agenda
    await user.click(confirmButton);
    
    // Verificar que o callback foi chamado com 2
    expect(mockOnConfirmar).toHaveBeenCalledWith(2);
    expect(mockOnConfirmar).toHaveBeenCalledTimes(1);
  });
});
