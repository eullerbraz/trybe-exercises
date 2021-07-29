import React from 'react'
import { cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRedux from './renderWithRedux';

describe('testing clicks', () => {
  beforeEach(cleanup);
  test('the page should has a button and a text 0', () => {
    const { queryByText } = renderWithRedux(<App />);
    const buttonAdicionar = queryByText('Clique aqui');

    expect(buttonAdicionar).toBeInTheDocument();
    expect(queryByText('0')).toBeInTheDocument();
  });

  test('a click in a button should increment the value of clicks', () => {
    const { queryByText, queryByRole } = renderWithRedux(<App />, { initialState: { clickReducer: { counter: 5 }}});
    const button = queryByRole('button', { name: 'Clique aqui' });

    expect(button).toBeInTheDocument();
    expect(queryByText('5')).toBeInTheDocument();
    
    userEvent.dblClick(button);
    expect(queryByText('7')).toBeInTheDocument();

  });
});