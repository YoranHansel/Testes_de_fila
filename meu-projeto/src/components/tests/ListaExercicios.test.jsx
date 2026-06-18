import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ListaExercicios from '../ListaExercicios';

describe('ListaExercicios', () => {
  test('Achar vários iguais — getAllByRole', () => {
    render(<ListaExercicios />);
    const items = screen.getAllByRole('listitem');
    
    expect(items).toHaveLength(3);
  });
});
