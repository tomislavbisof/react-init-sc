import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('tests the App component', () => {
  const wrapper = shallow(<App />);

  it('renders the App component', () => {
    expect(wrapper.find('[data-test="App"]').exists()).toBe(true);
  });
});
