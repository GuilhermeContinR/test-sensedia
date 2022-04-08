import React from 'react';
import {Provider} from 'react-redux';
import { render,screen } from '@testing-library/react';
import Grid from '../../components/grid';
import { store } from '../../store';

describe('List component', () => {


  it('should render list items', async () => {
    let data: { id: number, title: string, author: string, body:string, date: Date }[] = [
      { "id": 1, title: 'lorem', author: 'string', body: 'string', date: new Date()}
    ];
    const { findAllByText } = render(
      <Provider store={store}>
        <Grid  data={data} itensPerPage={8} />
      </Provider>
    );
    
    expect(await findAllByText('lorem')).toBeTruthy();

  });



});
