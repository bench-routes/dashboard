import React from "react";
import { waitFor } from "@testing-library/react";
import SelectedRoute from ".";
import {
  mockSelectedRouteName,
  mockSelectedRoutePath,
} from "../../mock/mockGraph";
import { useGlobalStore } from "../../store/global";
import { render } from "../../utils/customRender";

const TestComponent = () => {
  const { changeRoute } = useGlobalStore();
  React.useEffect(() => {
    changeRoute(mockSelectedRouteName, mockSelectedRoutePath);
  }, []);
  return null;
};

describe("tests the SelectedRoute component", () => {
  beforeEach(() => {
    jest
      .spyOn(HTMLElement.prototype, "clientHeight", "get")
      .mockReturnValue(100);
    jest
      .spyOn(HTMLElement.prototype, "clientWidth", "get")
      .mockReturnValue(100);
  });

  test("renders the alert info when there is no selected route", async () => {
    const { getByTestId } = render(
      <>
        <SelectedRoute />
      </>
    );
    const graphInfo = await waitFor(() => getByTestId("graph-info"));

    expect(graphInfo).toBeTruthy();
  });

  test("renders the GraphWrapper when there exists a selected route", async () => {
    const { getByTestId } = render(
      <>
        <TestComponent />
        <SelectedRoute />
      </>
    );

    const graphInfo = await waitFor(() => getByTestId("graphwrapper"));

    expect(graphInfo).toBeTruthy();
  });
});
