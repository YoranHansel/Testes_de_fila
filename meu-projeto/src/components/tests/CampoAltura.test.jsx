import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import CampoAltura from '../CampoAltura';

describe('CampoAltura', () => {
  test('O campo e o texto de ajuda', () => {
    render(<CampoAltura />);
    
    const input = screen.getByLabelText('Altura');
    const helpText = screen.getByText('Em centímetros');
    
    expect(input).toBeInTheDocument();
    expect(helpText).toBeInTheDocument();
  });
});
