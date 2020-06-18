import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import App from './App';
import renderer from 'react-test-renderer';

//smoke test
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

//snapshot test
it('renders the UI as expected', () => {
    const a = [ 
        { id: 'l', title: 'Twelfth card', content: 'lorem ipsum' },
        { id: 'm', title: 'Thirteenth card', content: 'lorem ipsum' }
    ];
    const tree = renderer
      .create(
        <List
          key= '4'
          header= 'Fourth List'
          cards= {a}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();  
    });