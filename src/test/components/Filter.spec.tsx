import React from 'react';
import { render, fireEvent, waitForElementToBeRemoved, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Filter from '../../components/filter';
import {Provider} from 'react-redux';
import { store } from '../../store';
import '@testing-library/jest-dom'
describe('Filter component', () => {
 
  it('should be able to click button clear', async () => {
  

   const { getByTestId, queryByText } = render(
    <Provider store={store} >
      <Filter />
    </Provider>
    );
    const inputElement = getByTestId('inputText');
    userEvent.type(inputElement, 'Novo');
    const btn = getByTestId('btnClear');
    btn?.dispatchEvent(new MouseEvent("click", { bubbles : true}) )

    // fireEvent.click(getByTestId("btnClear"))
    expect(await queryByText('Novo')).not.toBeInTheDocument();

  });
});


 