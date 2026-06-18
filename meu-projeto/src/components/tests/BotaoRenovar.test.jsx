import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BotaoRenovar from '../BotaoRenovar';

describe('Teste BotaoRenovar',()=>{
    test('Achar um botão pelo papel', () =>{
        render(<BotaoRenovar/>)

        expect(screen.getByRole('button', 'Renovar plano'))
    });
});