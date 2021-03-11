import React from "react";
import { shallow } from "enzyme";
import Timer from "./../Timer";

describe("Timer", () => {
  let timerConatiner;

  beforeEach(() => (timerConatiner = shallow(<Timer />)));

  it("should render a <div />", () => {
    expect(timerConatiner.find("div").length).toBeGreaterThanOrEqual(1);
  });
});
