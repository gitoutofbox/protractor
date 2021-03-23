import { browser, by, element, logging } from 'protractor';
import { ProductListPage } from './product-list.po';

describe('workspace-project App', () => {
  let page: ProductListPage;

  beforeEach(() => {
    page = new ProductListPage();
  });

  it('should display welcome message', async () => {
    await page.navigateTo();
    expect(await page.isListPresent()).toBeTruthy("Product list rendered");
  });

  it('should open add product modal', async () => {
    // await page.navigateTo();
    page.addButton().click();
    expect(page.addModalElement()).toBeTruthy("Add Product modal opened");
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
