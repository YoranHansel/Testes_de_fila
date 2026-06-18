import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import AvisoPagamento from '../AvisoPagamento';

describe('AvisoPagamento', () => {
  test('Achar texto com regex — getByText(/.../i)', () => {
    render(<AvisoPagamento />);
    const message = screen.getByText(/pagamento confirmado com sucesso/i);
    expect(message).toBeInTheDocument();
  });
});
