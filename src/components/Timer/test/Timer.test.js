import React from "react";
import { shallow } from "enzyme";
import Timer from "./../Timer";

describe("Timer", () => {
  let timeConatiner;

  beforeEach(() => (timeConatiner = shallow(<Timer />)));

  it("should render a <div />", () => {
    expect(timeConatiner.find("div").length).toBeGreaterThanOrEqual(1);
  });

  it("render <TimerButton /> ",()=>{
    expect(timeConatiner.find('TimerButton').length).toEqual(3)
  })

it('should change isOn state true when the start button is clicked', () => {
    timeConatiner.instance().forceUpdate();
    timeConatiner.find('.start-timer').first().simulate('click');
     expect(timeConatiner.instance().state.isOn).toEqual(false);;
  });

  it('should change isOn state false when the stop button is clicked', () => {
    timeConatiner.instance().forceUpdate();
    timeConatiner.find('.stop-timer').first().simulate('click');
    expect(timeConatiner.instance().state.isOn).toEqual(false);
  });

  it('should change isOn state false when the reset button is clicked', () => {
    timeConatiner.instance().forceUpdate();
    timeConatiner.find('.stop-timer').first().simulate('click');
    expect(timeConatiner.instance().state.isOn).toEqual(false);
    expect(timeConatiner.instance().state.minutes).toEqual(25);
    expect(timeConatiner.instance().state.seconds).toEqual(0);
 });;

});

