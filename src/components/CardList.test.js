import { shallow } from "enzyme";
import CardList from "./CardList";
import React from "react";

it("expect to render CardList component", () => {
  const mockRobots = [
    {
      id: 1,
      name: "jone",
      email: "jone@gmail.com"
    }
  ];

  expect(shallow(<CardList robots={mockRobots} />).length).toEqual(1);
  expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
});
