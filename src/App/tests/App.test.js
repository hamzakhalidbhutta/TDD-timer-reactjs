import React from 'react'
import { shallow } from "enzyme";
import App from './../App'


describe("<App />", () => {
  it("Renders <App /> component correctly", () => {
    const conatiner = shallow(<App />);
    expect(conatiner.find('h1').length).toEqual(1);
  });

  // it("Should contain the <Timer /> Component"),()=>{

  // }
});