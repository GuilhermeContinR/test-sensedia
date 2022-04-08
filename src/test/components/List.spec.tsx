import React from 'react';
import {Provider} from 'react-redux';
import { render } from '@testing-library/react';
import List from '../../components/list';
import { CustomFooterTotalComponent } from '../../components/list/customFooter';
import { store } from '../../store';

describe('List component', () => {


  it('should render list items', async () => {
    let data: { id: number, title: string, author: string, body:string, date: Date }[] = [
      { "id": 1, title: 'string', author: 'string', body: 'string', date: new Date()}
    ];
    const { findAllByText } = render(
      <Provider store={store}>
        <List  data={data} perPage={20} />
      </Provider>
    );
    
    expect(findAllByText('string')).toBeTruthy();

  });



});







































// test('sum', () => {
//   const { getByText,getByTestId } = render(<App/>)
//   // expect( getByText('Ola')).toBeTruthy();
//   // expect( getByText('Ola')).toBeInTheDocument();
//   // expect(getByText('Ola')).toHaveAttribute('class','test');
//   expect(getByTestId('first')).toHaveAttribute('class','test');
// })


// query -> nao falha quando nao encontra o elemento ( verificar se existe ou nao )
// get -> se nao encontra o element, ele falha . ( elemento precisa estar em tela)
// find -> parecido com o get, porém espera o elemento aparecer em tela