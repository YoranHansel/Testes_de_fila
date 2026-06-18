import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContadorSeries from '../ContadorSeries';

describe('ContadorSeries', () => {
  test('Clicar num botão — userEvent', async () => {
    const user = userEvent.setup();
    render(<ContadorSeries />);
    const button = screen.getByRole('button');
    
    await user.click(button);
    
    expect(button).toHaveTextContent('Série feita (1)');
  });
});
