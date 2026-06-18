import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import AreaAluno from '../AreaAluno';

describe('AreaAluno', () => {
  test('Provar ausência — queryBy + .not', () => {
    render(<AreaAluno />);
    const heading = screen.getByRole('heading', { name: /Área do aluno/i });
    expect(heading).toBeInTheDocument();
    
    const aviso = screen.queryByText(/aviso de vencimento/i);
    expect(aviso).not.toBeInTheDocument();
  });
});
