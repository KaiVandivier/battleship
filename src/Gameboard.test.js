import React from 'react';
import ReactDOM from 'react-dom';
import Gameboard from './Gameboard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Gameboard />, div);
  ReactDOM.unmountComponentAtNode(div);
});
