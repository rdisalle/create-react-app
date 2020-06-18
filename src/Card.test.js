import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
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
    const tree = renderer
      .create(<Card
        key={Card.id}
        title={Card.title}
        content={Card.content}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
    });