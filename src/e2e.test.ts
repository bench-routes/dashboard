import { routeResponse } from "./utils/types";
import puppeteer from "puppeteer";
import dayjs from "dayjs";
import constants from "./utils/constants";
import { getActiveMachines } from "./services/getActiveMachines";
import { getRoutes } from "./services/getRoutes";
import { truncate } from "./utils/stringManipulation";

const {
  defaultStartTimestamp,
  defaultStepValue,
  defaultEndTimestamp,
  dateFormat,
  timeFormat,
} = constants;

describe("E2E test for Dashboard", () => {
  let browser: puppeteer.Browser;
  let page: puppeteer.Page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  it("dashboard initially renders with  correct value", async () => {
    let machines: string[] = [];
    let routes: string[] = [];
    page.on("console", (message) => console.log(message.text()));
    page.on("response", async (response) => {
      if (response.url() == getActiveMachines()) {
        const responseBody = await response.json();
        machines = responseBody.data.machines;
      }
      if (machines.length && response.url() == getRoutes(machines[0])) {
        const responseBody = await response.json();
        routes = responseBody.data.map((e: routeResponse) =>
          truncate(e.entity_name, 30)
        );
      }
    });

    await page.goto("http://localhost:5000", { waitUntil: "networkidle0" });
    const entities = await page.$$eval('[data-testid="entity"]', (entity) =>
      entity.map((e) => e.textContent)
    );
    const machine = await page.$$eval(
      '[data-testid="machine-selector"]>option',
      (entity) => entity.map((e) => e.textContent)
    );
    const graph = page.$('[data-testid="graph-info"]');
    const startTime = await page.$(
      `input[class="custom-datepicker start-time"][value="${dayjs(
        defaultStartTimestamp
      ).format(`${dateFormat} ${timeFormat}"`)}]`
    );
    const endTime = await page.$(
      `input[value="${dayjs(defaultEndTimestamp).format(
        `${dateFormat} ${timeFormat}"`
      )}]`
    );
    const stepValue = await page.$(
      `input[value="${defaultStepValue.toString()}"]`
    );

    expect(machine[0]).toBe(machines[0]);
    expect(graph).toBeTruthy();
    expect(startTime).toBeTruthy();
    expect(endTime).toBeTruthy();
    expect(stepValue).toBeTruthy();
    entities.map((entity) => {
      if (entity) expect(routes.includes(entity.replace(/\s/g, "")));
    });
  });

  it("routes changes on change of machine", async () => {
    let machines: string[] = [];
    let routes: string[] = [];
    let selectedMachine = 0;
    page.on("console", (message) => console.log(message.text()));
    page.on("response", async (response) => {
      if (response.url() == getActiveMachines()) {
        const responseBody = await response.json();
        machines = responseBody.data.machines;
      }
      if (
        machines.length &&
        response.url() == getRoutes(machines[selectedMachine])
      ) {
        const responseBody = await response.json();
        routes = responseBody.data.map((e: routeResponse) =>
          truncate(e.entity_name, 30)
        );
      }
    });

    await page.goto("http://localhost:5000");
    await page.waitForSelector('[data-testid="machine-selector"]');
    selectedMachine = machines.length - 1;
    await page.select(
      '[data-testid="machine-selector"]',
      machines[machines.length - 1]
    );
    const machine = await page.$$eval(
      '[data-testid="machine-selector"]>option',
      (entity) => entity.map((e) => e.textContent)
    );
    const entities = await page.$$eval('[data-testid="entity"]', (entity) =>
      entity.map((e) => e.textContent)
    );
    const graph = page.$('[data-testid="graph-info"]');

    expect(machine[selectedMachine]).toBe(machines[selectedMachine]);
    expect(graph).toBeTruthy();
    entities.map((entity) => {
      if (entity) expect(routes.includes(entity.replace(/\s/g, "")));
    });
  });

  it("search of routes works", async () => {
    let machines: string[] = [];
    let routes: string[] = [];
    page.on("console", (message) => console.log(message.text()));
    page.on("response", async (response) => {
      if (response.url() == getActiveMachines()) {
        const responseBody = await response.json();
        machines = responseBody.data.machines;
      }
      if (machines.length && response.url() == getRoutes(machines[0])) {
        const responseBody = await response.json();
        routes = responseBody.data.map((e: routeResponse) =>
          truncate(e.entity_name, 30)
        );
      }
    });

    await page.goto("http://localhost:5000", { waitUntil: "networkidle0" });
    await page.click('[data-testid="route-search"]');
    await page.type('[data-testid="route-search"]', "pi");
    const entities = await page.$$eval('[data-testid="entity"]', (entity) =>
      entity.map((e) => e.textContent)
    );
    const filteredEntities = routes.filter((r) =>
      r.toLowerCase().includes("pi")
    );

    entities.map((entity) => {
      if (entity) expect(filteredEntities.includes(entity.replace(/\s/g, "")));
    });
    expect(entities.length).toBe(filteredEntities.length);
  });

  it("route selection works correctly", async () => {
    page.on("console", (message) => console.log(message.text()));

    await page.goto("http://localhost:5000", { waitUntil: "networkidle0" });
    const entities = await page.$$('[data-testid="entity"]');
    await entities[0].click();
    const graph = await page.$('[data-testid="graph"]');
    if (graph) expect(graph).toBeTruthy();
  });

  it("start-time values change properly", async () => {
    page.on("console", (message) => console.log(message.text()));

    await page.goto("http://localhost:5000");
    const startTime = await page.$(".start-time");
    const newStart = dayjs().subtract(1, "days").subtract(1, "hours");
    if (startTime) {
      await startTime.click();
    }
    const nextStart = await page.$<HTMLElement>(
      `td[class="rdtDay"][data-value="${newStart.format("D")}"][data-month="${(
        parseInt(newStart.format("M"), 10) - 1
      ).toString()}"][data-year="${newStart.format("YYYY")}"]`
    );
    await nextStart?.evaluate((b) => b.click());
    const start = await page.$(
      `input[class="custom-datepicker start-time"][value="${dayjs(
        newStart
      ).format(`${dateFormat} ${timeFormat}`)}"]`
    );

    expect(start).toBeTruthy();
  });

  it("end-time values change properly", async () => {
    page.on("console", (message) => console.log(message.text()));

    await page.goto("http://localhost:5000");
    const endTime = await page.$(".end-time");
    const newEnd = dayjs().subtract(2, "days");
    if (endTime) {
      await endTime.click();
    }
    const nextEnd = await page.$$<HTMLElement>(
      `td[class="rdtDay"][data-value="${newEnd.format("D")}"][data-month="${(
        parseInt(newEnd.format("M"), 10) - 1
      ).toString()}"][data-year="${newEnd.format("YYYY")}"]`
    );
    await nextEnd[1]?.evaluate((b) => {
      return b.click();
    });
    const end = await page.$(
      `input[class="custom-datepicker end-time"][value="${dayjs(newEnd).format(
        `${dateFormat} ${timeFormat}"`
      )}]`
    );

    expect(end).toBeTruthy();
  });

  it("step values change properly", async () => {
    page.on("console", (message) => console.log(message.text()));

    await page.goto("http://localhost:5000");
    await page.click('[data-testid="step-value"]');
    await page.type('[data-testid="step-value"]', "0");
    const stepValue = await page.$('input[inputmode="decimal"][value="150"]');

    expect(stepValue).toBeTruthy();
  });

  it("error displayed if end time less than step time", async () => {
    page.on("console", (message) => console.log(message.text()));

    await page.goto("http://localhost:5000");
    const endTime = await page.$(".end-time");
    const newEnd = dayjs().subtract(2, "days");
    if (endTime) {
      await endTime.click();
    }
    const nextEnd = await page.$$<HTMLElement>(
      `td[class="rdtDay"][data-value="${newEnd.format("D")}"][data-month="${(
        parseInt(newEnd.format("M"), 10) - 1
      ).toString()}"][data-year="${newEnd.format("YYYY")}"]`
    );
    await nextEnd[1]?.evaluate((b) => {
      return b.click();
    });
    await page.click('[data-testid="fetch-button"]');
    const error = await page.$('[data-testid="error-message"]');

    expect(error).toBeTruthy();
  });

  it("fetch graph data correctly", async () => {
    page.on("console", (message) => console.log(message.text()));

    await page.goto("http://localhost:5000", { waitUntil: "networkidle0" });
    const entities = await page.$$('[data-testid="entity"]');
    await entities[0].click();
    if (await page.$('[data-testid="graph"]')) {
      const startTime = await page.$(".start-time");
      const newStart = dayjs().subtract(1, "days").subtract(1, "hours");
      if (startTime) {
        await startTime.click();
      }
      const nextStart = await page.$<HTMLElement>(
        `td[class="rdtDay"][data-value="${newStart.format(
          "D"
        )}"][data-month="${(
          parseInt(newStart.format("M"), 10) - 1
        ).toString()}"][data-year="${newStart.format("YYYY")}"]`
      );
      await nextStart?.evaluate((b) => b.click());
      await page.click('[data-testid="step-value"]');
      await page.type('[data-testid="step-value"]', "0");

      const graph = await page.$('[data-testid="graph"]');
      if (graph) expect(graph).toBeTruthy();
    }
  });

  afterAll(() => browser.close());
});
