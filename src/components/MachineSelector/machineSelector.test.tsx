import * as React from "react";
import axios from "axios";
import { waitFor, fireEvent } from "@testing-library/react";
import MachineSelector from ".";
import { render } from "../../utils/customRender";
import { getActiveMachines } from "../../services/getActiveMachines";
import { mockMachines } from "../../mock/mockMachines";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("tests for the MachineSelector Component", () => {
  beforeEach(() => {
    mockedAxios.get.mockReset();
  });

  test("renders machine selector component", async () => {
    const { getByTestId } = render(<MachineSelector />);
    const selectElement = await waitFor(() => getByTestId("machine-selector"));

    expect(selectElement).toBeTruthy();
  });

  test("initially renders with localhost ", async () => {
    mockedAxios.get.mockResolvedValue({ data: mockMachines });

    const { getByTestId } = render(<MachineSelector />);
    const selectElement = await waitFor(() => getByTestId("machine-selector"));

    expect(selectElement).toHaveValue("localhost");
    expect(mockedAxios.get).toHaveBeenCalledWith(getActiveMachines());
  });

  test("changes value on selecting different option ", async () => {
    mockedAxios.get.mockResolvedValue({ data: mockMachines });

    const { getByTestId } = render(<MachineSelector />);
    const selectElement = await waitFor(() => getByTestId("machine-selector"));

    fireEvent.change(getByTestId("machine-selector"), {
      target: { value: mockMachines.machines[1] },
    });

    expect(selectElement).toHaveValue(mockMachines.machines[1]);
    expect(mockedAxios.get).toHaveBeenCalledWith(getActiveMachines());
  });

  test("is disabled and displays message on error", async () => {
    mockedAxios.get.mockRejectedValue(new Error("Async error"));

    const { getByTestId } = render(<MachineSelector />);
    const selectElement = await waitFor(() => getByTestId("machine-selector"));

    expect(selectElement).toBeDisabled();
    expect(getByTestId("error-message")).toBeTruthy();
  });
});
