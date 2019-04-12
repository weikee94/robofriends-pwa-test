import * as actions from "./actions";
import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from "./constants";

import configureMockStore from "redux-mock-store";
import thunkMiddleware from "redux-thunk";

const mockStore = configureMockStore([thunkMiddleware]);

describe("action test", () => {
  it("should create an action to search robots", () => {
    const text = "woo";
    const expectedAction = {
      type: CHANGE_SEARCHFIELD,
      payload: text
    };
    expect(actions.setSearchField(text)).toEqual(expectedAction);
  });

  it("handles requesting robot API", () => {
    const expectedAction = {
      type: REQUEST_ROBOTS_PENDING
    };

    const store = mockStore();
    store.dispatch(actions.requestRobots());
    const action = store.getActions();
    expect(action[0]).toEqual(expectedAction);
  });

  it("handles success request robot API", () => {
    const expectedAction = {
      type: REQUEST_ROBOTS_SUCCESS,
      payload: { user: 1 }
    };
    const store = mockStore();
    store.dispatch(actions.requestRobots());
    const action = store.dispatch({
      type: REQUEST_ROBOTS_SUCCESS,
      payload: { user: 1 }
    });
    expect(action).toEqual(expectedAction);
  });
});
