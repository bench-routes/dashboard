import * as React from "react";
import moment from "moment";
import { fireEvent } from "@testing-library/react";
import TimeQuerier from "..";
import { render } from "../../../utils/customRender";
import {
  defaultStartTimestamp,
  defaultStepValue,
  defaultEndTimestamp,
} from "../../../utils/constants";
import { TimeQuerierStore } from "../../../store/timeQuerier";

describe("TimeQuerier Component", () => {
  test("initially renders with correct values", () => {
    const { getByDisplayValue } = render(<TimeQuerier />);

    expect(getByDisplayValue(defaultStepValue.toString(10))).toBeTruthy();
    expect(
      getByDisplayValue(
        moment(defaultStartTimestamp).format("MM/DD/YYYY h:m A")
      )
    ).toBeTruthy();
    expect(
      getByDisplayValue(moment(defaultEndTimestamp).format("MM/DD/YYYY h:m A"))
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
      const timeQuerierStore = TimeQuerierStore.useContainer();
      return <div data-testid="test">{timeQuerierStore.selectedStepValue}</div>;
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

  // test("start-time value changes", () => {
  //   const { getByDisplayValue } = render(<TimeQuerier />);

  //   fireEvent.change(
  //     getByDisplayValue(
  //       moment(defaultStartTimestamp).format("MM/DD/YYYY h:m A")
  //     ),
  //     {
  //       target: {
  //         value: moment(defaultStartTimestamp).subtract(3, "h"),
  //       },
  //     }
  //   );
  //   expect(
  //     getByDisplayValue(
  //       moment(defaultStartTimestamp)
  //         .subtract(3, "h")
  //         .format("MM/DD/YYYY h:m A")
  //     )
  //   ).toBeTruthy();
  // });
});
