import { machineResponse } from "./components/MachineSelector/index";
import { ApiResponse } from "./utils/types";
import puppeteer from "puppeteer";
import { getActiveMachines } from "./services/getActiveMachines";

describe("App.js", () => {
  let browser: puppeteer.Browser;
  let page: puppeteer.Page;

  beforeAll(async () => {
    jest.setTimeout(60000);
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  it("contains the welcome text", async () => {
    await page.goto("http://localhost:5000");
    const finalResponse = await page.waitForResponse(
      (response) =>
        response.url() === getActiveMachines() && response.status() === 200
    );
    const res: ApiResponse<machineResponse> = await finalResponse.json();
    await page.waitForSelector('[data-testid="machine-selector"]');
    const text = await page.$eval(
      '[data-testid="machine-selector"]',
      (e) => e.textContent
    );
    expect(text).toBe(res.data.machines[0]);
  });

  afterAll(() => browser.close());
});

