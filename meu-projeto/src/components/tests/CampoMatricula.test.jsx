import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import CampoMatricula from '../CampoMatricula';

describe('CampoMatricula', () => {
  test('Achar um campo pela etiqueta — getByLabelText', () => {
    render(<CampoMatricula />);
    const input = screen.getByLabelText('Matrícula');
    expect(input).toBeInTheDocument();
  });
});
