import React from 'react';
import App from './App';

import {shallow} from 'enzyme';

describe("<App/>", () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App/>)
  })
})

