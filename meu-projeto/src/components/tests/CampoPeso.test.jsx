import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CampoPeso from '../CampoPeso';

describe('CampoPeso', () => {
  test('Digitar num campo — user.type + toHaveValue', async () => {
    const user = userEvent.setup();
    render(<CampoPeso />);
    const input = screen.getByLabelText('Peso (kg)');
    
    await user.type(input, '75');
    
    expect(input).toHaveValue('75');
  });
});
