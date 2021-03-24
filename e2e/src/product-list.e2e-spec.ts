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

  it('should open add product modal', () => {
    page.addButton().click();
    expect(page.addModalElement()).toBeTruthy("Add Product modal opened");
  });

  it('should close add product modal on click on close button', () => {
    page.closeButton().click();
    expect(page.addModalElement()).toBeFalsy("Add Product modal closed");
  });

  //Validation check
  it('should validate the form on Save click', async() => {
    page.saveButton().click();
    expect(await page.nameErrorElement().isPresent()).toBeTruthy("Name required error message shown");    
    expect(await page.priceErrorElement().isPresent()).toBeTruthy("Price required error message shown");    
    expect(await page.descriptionErrorElement().isPresent()).toBeFalsy("Description required error message shown");    
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
