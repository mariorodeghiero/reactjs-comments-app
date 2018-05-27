import React from 'react';
import {shallow, mount} from 'enzyme';
import App from './App';

describe("<App/>", () => {
  // Testing render
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

  //testing postNewComment
  it("add a New Comment to state when postNewComment", () => {
    const wrapper = mount(<App />)
    wrapper.instance().postNewComment({ comment: "test"})
    console.log(wrapper.instance().state)
  })
})
