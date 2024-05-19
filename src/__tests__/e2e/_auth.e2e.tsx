import puppeteer, { Browser, Page } from "puppeteer";

describe("E2E: Auth Module", () => {
  let browser: Browser;
  let page: Page;

  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      args: ["--use-mock-keychain", "--password-store=basic"],
    });

    page = await browser.newPage();
  });

  it("should login", async () => {
    await page.goto("http://localhost:3000", { waitUntil: "networkidle0" });

    await page.type('[aria-label="email-input"]', "cliente@youdrive.com");
    await page.type('[aria-label="password-input"]', "password");

    await page.click("[aria-label='submit-button']");

    await page.waitForNetworkIdle();

    const element = await page.waitForSelector(
      '[aria-label="email-field-value"]',
      { timeout: 1000 }
    );

    const text = await page.evaluate((el) => el?.textContent, element);

    expect(text).toEqual("cliente@youdrive.com");
  });

  it("should logout", async () => {
    await page.click("[aria-label='logout-button']");

    await page.waitForSelector('[aria-label="login-form"]', {
      timeout: 1000,
    });
  });

  afterAll(() => browser.close());
});
