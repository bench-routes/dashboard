import * as React from "react";
import axios from "axios";
import { waitFor, fireEvent, prettyDOM } from "@testing-library/react";
import RouteSelector from "./";
import { render } from "../../utils/customRender";
import { mockRoutes, mockSearch } from "../../mock/mockRoutes";
import { getRoutes } from "../../services/getRoutes";

jest.mock("axios");
jest.mock("react-virtualized-auto-sizer", () => ({ children }: any) =>
  children({ height: 600, width: 600 })
);

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("tests for the RouteSelector Component", () => {
  beforeEach(() => {
    mockedAxios.get.mockReset();
  });

  test("renders route selector component", async () => {
    const { getByTestId } = render(<RouteSelector />);
    const selectElement = await waitFor(() => getByTestId("route-selector"));

    expect(selectElement).toBeTruthy();
  });

  test("initially renders with localhost routes ", async () => {
    const mockRoute = mockRoutes(5);
    mockedAxios.get.mockResolvedValue({ data: mockRoute });

    const { getByTestId } = render(<RouteSelector />);
    const selectElement = await waitFor(() => getByTestId("route-list"));

    mockRoute.map((route) => {
      expect(selectElement).toHaveTextContent(route.name);
    });
    expect(mockedAxios.get).toHaveBeenCalledWith(getRoutes("localhost"));
  });

  test("filters routes on search ", async () => {
    const mockRoute = mockRoutes(5);
    mockedAxios.get.mockResolvedValue({ data: mockRoute });

    const { getByTestId } = render(<RouteSelector />);
    const selectElement = await waitFor(() => getByTestId("route-list"));

    fireEvent.change(getByTestId("route-search"), {
      target: { value: mockSearch },
    });

    mockRoute.map((route) => {
      if (route.name.toLowerCase().includes(mockSearch))
        expect(selectElement).toHaveTextContent(route.name);
    });
    expect(mockedAxios.get).toHaveBeenCalledWith(getRoutes("localhost"));
  });

  test("is disabled and displays message on error", async () => {
    mockedAxios.get.mockRejectedValue(new Error("Async error"));

    const { getByTestId } = render(<RouteSelector />);
    const searchElement = await waitFor(() => getByTestId("route-search"));

    expect(searchElement).toBeDisabled();
    expect(getByTestId("error-message")).toBeTruthy();
  });
});
