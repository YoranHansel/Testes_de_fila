import '@testing-library/dom';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PainelChekin from '../PainelChekin';

describe('Componente PainelChekin', () =>{
    test('Começar com a sala Vazia', () =>{
        render(<PainelChekin/>);

        expect(screen.getByText('Alunos na sala: 0')).toBeInDocument;
        expect(screen.getByText('Sala Vazia')).toBeInDocument;
    });

    test('Clicar em Registrar entrada quantidade de alunos na sala', async()=>{
        const user = userEvent.setup();

        render(<PainelChekin/>);
         
        const btn = screen.getByRole('button', {name: 'Registrar entrada'});

        await user.click(btn);
        await user.click(btn);
        await user.click(btn);
        expect(screen.getByText('Alunos na sala: 3')).toBeInDocument;
        expect(screen.getByText('3 treinando agora')).toBeInDocument;
    });

    test('alerta de sala lotada', async () =>{
        const user = userEvent.setup();
        render(<PainelChekin/>);
        const btn = screen.getByRole('button', {name: 'Registrar entrada'});

        expect(screen.queryByRole('alert')).not.toBeInDocument;

        for(let i = 0; i<8; i++) await user.click(btn);

        expect(screen.getByText('Sala lotada')).toBeInDocument;
    });
});