import * as React from "react";
import moment from "moment";
import { fireEvent } from "@testing-library/react";
import TimeQuerier from "./";
import { render } from "../../utils/customRender";
import constants from "../../utils/constants";
import { TimeQuerierStore } from "../../store/timeQuerier";

const {
  defaultStartTimestamp,
  defaultStepValue,
  defaultEndTimestamp,
  dateFormat,
  timeFormat,
} = constants;

describe("TimeQuerier Component", () => {
  test("initially renders with correct values", () => {
    const { getByDisplayValue } = render(<TimeQuerier />);

    expect(getByDisplayValue(defaultStepValue.toString(10))).toBeTruthy();
    expect(
      getByDisplayValue(
        moment(defaultStartTimestamp).format(`${dateFormat} ${timeFormat}`)
      )
    ).toBeTruthy();
    expect(
      getByDisplayValue(
        moment(defaultEndTimestamp).format(`${dateFormat} ${timeFormat}`)
      )
    ).toBeTruthy();
  });

  test("step-value value changes", () => {
    const { getByDisplayValue } = render(<TimeQuerier />);

    fireEvent.change(getByDisplayValue(defaultStepValue.toString(10)), {
      target: {
        value: 25,
      },
    });

    expect(getByDisplayValue("25")).toBeTruthy();
  });

  test("step-value dont change if value out of bound", () => {
    const { getByDisplayValue } = render(<TimeQuerier />);

    fireEvent.change(getByDisplayValue(defaultStepValue.toString(10)), {
      target: {
        value: 0,
      },
    });

    expect(getByDisplayValue(defaultStepValue.toString(10))).toBeTruthy();
  });

  test("fetch works", () => {
    const TestComponent = () => {
      const { timeQuerierState } = TimeQuerierStore.useContainer();
      return <div data-testid="test">{timeQuerierState.selectedStepValue}</div>;
    };
    const { getByTestId, getByDisplayValue } = render(
      <>
        <TestComponent />
        <TimeQuerier />
      </>
    );

    fireEvent.change(getByDisplayValue(defaultStepValue.toString(10)), {
      target: {
        value: 20,
      },
    });
    fireEvent.click(getByTestId("fetch-button"));
    expect(getByTestId("test")).toHaveTextContent("20");
  });
});
