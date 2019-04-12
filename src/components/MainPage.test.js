import { shallow } from "enzyme";
import React from "react";
import MainPage from "./MainPage";

let wrapper;
// ensure fun before eact test
beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: "",
    isPending: false
  };
  wrapper = shallow(<MainPage {...mockProps} />);
});

it("expect to render MainPage component", () => {
  expect(wrapper).toMatchSnapshot();
});

it("filters empty robots correctly", () => {
  expect(wrapper.instance().filterRobots([])).toEqual([]);
});

it("filters robots array correctly", () => {
  const mockProps2 = {
    onRequestRobots: jest.fn(),
    robots: [
      {
        id: 100,
        name: "abc",
        email: "abc@gmail.com"
      }
    ],
    searchField: "abc",
    isPending: false
  };
  const wrapper2 = shallow(<MainPage {...mockProps2} />);

  expect(wrapper2.instance().filterRobots([])).toEqual([
    {
      id: 100,
      name: "abc",
      email: "abc@gmail.com"
    }
  ]);
});
