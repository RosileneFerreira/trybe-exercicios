import React from 'react'
import { Provider } from 'react-redux'
import { render, cleanup, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';
import { createStore, combineReducers } from 'redux';
import clickReducer from './reducers';

const renderWithRedux = (
  component,
  {
    initialState,
    store = createStore(combineReducers({ clickReducer }), initialState),
  } = {},
) => ({
  ...render(<Provider store={ store }>{component}</Provider>),
  store});

  describe('testing clicks', () => {
    beforeEach(cleanup);
    test('the page should have a button and a text 0', () => {
      renderWithRedux(<App />);
      const buttonAdicionar = screen.queryByText('Clique aqui');
  
      expect(buttonAdicionar).toBeInTheDocument();
      expect(screen.getByText('0')).toBeInTheDocument();
    });

    test('a click in a button should increment the value of clicks', () => {
      renderWithRedux(<App />, { initialState: { clickReducer: { counter: 5 } } });
  
      expect(screen.getByText('5')).toBeInTheDocument();
    });

    //Crie um teste com o valor padrão do reducer e teste se um clique funciona.

    test('when the button is clicked, the value counter is increased by 1', () => {
      renderWithRedux(<App />);
      const buttonAdicionar = screen.queryByText('Clique aqui');
  
      expect(screen.getByText('0')).toBeInTheDocument();
  
      userEvent.click(buttonAdicionar);
  
      expect(screen.getByText('1')).toBeInTheDocument();
    });

    //Altere o valor inicial do counter para 10, faça um clique do botão e crie os testes para esses comportamentos.

    test('the value counter is increased by 1 even when the initial value is 10', () => {
      renderWithRedux(<App />, { initialState: { clickReducer: { counter: 10 } } });
  
      expect(screen.getByText('10')).toBeInTheDocument();

      const buttonAdicionar = screen.queryByText('Clique aqui');
      userEvent.click(buttonAdicionar);
      expect(screen.getByText('11')).toBeInTheDocument();
    });
  });