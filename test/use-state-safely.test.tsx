import * as React from "react";
import * as ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import { TestSubject, UPDATE_STATE_DELAY } from "./test-subject";

let container: HTMLElement | null = null;

describe("it", () => {
  beforeEach(() => {
    container = document.createElement("div");
    container.id = "root";
    document.body.appendChild(container);
    jest.useFakeTimers();
  });

  afterEach(() => {
    container?.remove();
    container = null;
    jest.useRealTimers();
  });

  it("renders without crashing", () => {
    const spyOnConsoleError = jest.spyOn(console, "error").mockImplementation();

    act(() => {
      ReactDOM.render(<TestSubject safe />, container);
      ReactDOM.unmountComponentAtNode(container!);
    });

    act(() => {
      jest.advanceTimersByTime(UPDATE_STATE_DELAY);
    });

    expect(spyOnConsoleError).not.toHaveBeenCalled();

    spyOnConsoleError.mockRestore();
  });
});
