import React from 'react';
import {shallow} from 'enzyme';
import App from './App';

describe("<App/>", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<App/>)
    expect(wrapper.length).toBe(1)
  })
  it("should have .container class", () => {
    const wrapper = shallow(<App/>)
    expect(wrapper.is('.container')).toBe(true)
  })
  it("shows Comments", () => {
    const wrapper = shallow(<App/>)
    expect(wrapper.find('Comments').length).toBe(1)
  })
  it("shows NewComments", () => {
    const wrapper = shallow(<App/>)
    expect(wrapper.find('NewComment').length).toBe(1)
  })
})
