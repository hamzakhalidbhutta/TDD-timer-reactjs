import React from "react";
import { shallow } from "enzyme";
import App from "../App";
import Timer from "../../components/Timer/Timer";

describe("<App />", () => {
  let container

  beforeEach(() => (container = shallow(<App />)))

  it("Renders <App /> component correctly", () => {    
    expect(container.find('div').length).toEqual(1);
  });

  it("Should contain the <Timer /> Component",() => {
      expect(container.containsMatchingElement(<Timer />)).toEqual(true);
  });

});
