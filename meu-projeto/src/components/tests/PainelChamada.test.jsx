import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PainelChamada from '../PainelChamada';

describe('Testes de PainelChamada', () =>{
    test('prova que o painel aparece com "Presentes: 0".', () =>{
        render(<PainelChamada/>);
        expect(screen.getByText('Presentes: 0')).toBeInTheDocument;
    });

    test('Os dois botões estão lá ', () =>{
        render(<PainelChamada/>);

        expect(screen.getByRole('button', {name: 'Marcar presença'}));
        expect(screen.getByRole('button', {name: 'Fechar chamada'}))
    });

    test('Cada presença soma 1 ', async () =>{
        const user = userEvent.setup();

        render(<PainelChamada/>);
         
        const btn = screen.getByRole('button', {name: 'Marcar presença'});

        await user.click(btn);
        await user.click(btn);
        expect(screen.getByText('Presentes: 2')).toBeInDocument;
    })

test('Fechar a chamada avisa o sistema com o total certo', async () => {
    const user = userEvent.setup();
    const fnFecharChamadaMock = jest.fn();

   
    render(<PainelChamada onFecharChamada={fnFecharChamadaMock} />);
     
    const btn = screen.getByRole('button', { name: 'Marcar presença' });
    const btn2 = screen.getByRole('button', { name: 'Fechar chamada' });

    await user.click(btn);
    await user.click(btn);
    await user.click(btn);
    await user.click(btn);
    
    expect(screen.getByText('Presentes: 4')).toBeInTheDocument;

    await user.click(btn2);
    
    expect(fnFecharChamadaMock).toHaveBeenCalledWith(4);
  });

  test('O fluxo completo da chamada, num teste só ', async () =>{
    const user = userEvent.setup();
    const fnFecharChamadaMock = jest.fn();

    render(<PainelChamada onFecharChamada={fnFecharChamadaMock} />);
        expect(screen.getByText('Presentes: 0')).toBeInTheDocument;

        const btn = screen.getByRole('button', {name: 'Marcar presença'});
        const btn2 = screen.getByRole('button', { name: 'Fechar chamada' });

        await user.click(btn);
        await user.click(btn);
        await user.click(btn);
        expect(screen.getByText('Presentes: 3')).toBeInDocument;

        expect(screen.queryByRole(fnFecharChamadaMock)).not.toHaveBeenCalled;

        await user.click(btn2);
        expect(fnFecharChamadaMock).toHaveBeenCalledWith(3);
  });

});