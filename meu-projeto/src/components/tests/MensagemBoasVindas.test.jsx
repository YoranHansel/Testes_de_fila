import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MensagemBoasVindas from '../MensagemBoasVindas';

describe('Teste MensagemBoasVindas',()=>{
    test('Montar e achar pelo texto', () =>{
        render(<MensagemBoasVindas/>)

        expect(screen.getByText('Treino liberado'))
    });
});