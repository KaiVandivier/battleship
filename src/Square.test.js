import React from 'react';
import ReactDOM from 'react-dom';
import Square from './Square';

it('Square renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Square />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test.todo("");
// square takes props:
// "active" (has not been hit or missed; ready to be pressed)
// "hit" or "missed"
// "onClick" : if `active`, then calls callback (a resolve to a promise
// sent from the `getMove` function) -- how to connect getMove to here?
// "ship"
