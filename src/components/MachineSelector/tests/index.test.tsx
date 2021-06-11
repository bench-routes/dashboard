import * as React from "react";
import axios from "axios";
import { screen, waitFor, fireEvent } from "@testing-library/react";
import MachineSelector from "..";
import { render } from "../../../utils/customRender";
import { getActiveMachines } from "../../../services/getActiveMachines";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

const fakeMachines = {
  machines: ["computer", "google", "tabloid", "localhost"],
};

describe("MachineSelector Component", () => {
  test("initially renders with localhost ", async () => {
    mockedAxios.get.mockResolvedValue({ data: fakeMachines });

    const { getByTestId } = render(<MachineSelector />);
    const selectElement = await waitFor(() => getByTestId("machine-selector"));

    expect(selectElement).toHaveValue("localhost");
    expect(mockedAxios.get).toHaveBeenCalledWith(getActiveMachines());
  });
  test("change value on selecting different option ", async () => {
    mockedAxios.get.mockResolvedValue({ data: fakeMachines });

    const { getByTestId } = render(<MachineSelector />);
    const selectElement = await waitFor(() => getByTestId("machine-selector"));
    fireEvent.change(getByTestId("machine-selector"), {
      target: { value: "google" },
    });
    expect(selectElement).toHaveValue("google");
    expect(mockedAxios.get).toHaveBeenCalledWith(getActiveMachines());
  });
});
