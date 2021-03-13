import React from "react";
import { shallow } from "enzyme";
import TimerButton from "../TimerButton";

describe("<TimerButton />", () => {
  let timerButtonConatiner;
  beforeEach(
    () =>
      (timerButtonConatiner = shallow(
        <TimerButton buttonAction={jest.fn()} buttonValue={""} />
      ))
  );

  it("TimerButton", () => {
    expect(timerButtonConatiner.find("div").length).toBeGreaterThanOrEqual(1);
  });
});
