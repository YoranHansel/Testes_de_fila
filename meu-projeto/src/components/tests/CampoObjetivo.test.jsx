import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CampoObjetivo from '../CampoObjetivo';

describe('CampoObjetivo', () => {
  test('Digitar no campo de objetivo', async () => {
    const user = userEvent.setup();
    render(<CampoObjetivo />);
    
    const input = screen.getByLabelText('Objetivo');
    await user.type(input, 'emagrecer');
    
    expect(input).toHaveValue('emagrecer');
  });
});
