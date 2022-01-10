import React from "react";
import axios from "axios";
import { waitFor } from "@testing-library/react";
import GraphWrapper from "./";
import { render } from "../../utils/customRender";
import {
  mockSelectedRouteName,
  mockSelectedRoutePath,
  mockGraphData,
} from "../../mock/mockGraph";
import { queryEntities } from "../../services/queryEntity";
import constants from "../../utils/constants";
import { useGlobalStore } from "../../store/global";

const { defaultStartTimestamp, defaultStepValue, defaultEndTimestamp } =
  constants;

const TestComponent = () => {
  const { changeRoute } = useGlobalStore();
  React.useEffect(() => {
    changeRoute(mockSelectedRouteName, mockSelectedRoutePath);
  }, []);
  return null;
};

jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("tests for the Graph Component", () => {
  beforeEach(() => {
    mockedAxios.get.mockReset();
    jest
      .spyOn(HTMLElement.prototype, "clientHeight", "get")
      .mockReturnValue(100);
    jest
      .spyOn(HTMLElement.prototype, "clientWidth", "get")
      .mockReturnValue(100);
  });

  test("shows error dialog if route is selected and error is thrown", async () => {
    mockedAxios.get.mockRejectedValue(new Error("Async error"));

    const { getByTestId } = render(
      <>
        <TestComponent />
        <GraphWrapper selectedRoutePath={mockSelectedRoutePath} />
      </>
    );
    const graphError = await waitFor(() => getByTestId("graph-error"));

    expect(graphError).toBeTruthy();
    expect(mockedAxios.get).toHaveBeenCalledWith(
      queryEntities(
        mockSelectedRoutePath,
        defaultStartTimestamp,
        defaultEndTimestamp,
        defaultStepValue
      )
    );
  });

  test("shows error to increase step value if data more than 6000", async () => {
    mockedAxios.get.mockResolvedValue({ data: { data: mockGraphData(6001) } });

    const { getByTestId } = render(
      <>
        <TestComponent />
        <GraphWrapper selectedRoutePath={mockSelectedRoutePath} />
      </>
    );
    const stepAlert = await waitFor(() => getByTestId("step-alert"));

    expect(stepAlert).toBeTruthy();
    expect(mockedAxios.get).toHaveBeenCalledWith(
      queryEntities(
        mockSelectedRoutePath,
        defaultStartTimestamp,
        defaultEndTimestamp,
        defaultStepValue
      )
    );
  });

  test("plots the data correctly", async () => {
    mockedAxios.get.mockResolvedValue({ data: { data: mockGraphData(10) } });

    const { queryByTestId } = render(
      <>
        <TestComponent />
        <GraphWrapper selectedRoutePath={mockSelectedRoutePath} />
      </>
    );
    const stepAlert = await waitFor(() => queryByTestId("step-alert"));

    expect(stepAlert).toBeFalsy();
    expect(mockedAxios.get).toHaveBeenCalledWith(
      queryEntities(
        mockSelectedRoutePath,
        defaultStartTimestamp,
        defaultEndTimestamp,
        defaultStepValue
      )
    );
  });
});
