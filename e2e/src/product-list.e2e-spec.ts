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

  it('should open & close add product modal', async () => {
    await page.addButton().click();
    expect(page.addModalElement()).toBeTruthy("Add Product modal opened");
    await page.closeButton().click();
    expect(page.addModalElement()).toBeFalsy("Add Product modal closed");
  });

  // Validation check
  it('should validate the form on Save click', async () => {
    await page.addButton().click();
    await page.saveButton().click();
    expect( page.nameErrorElement().isPresent()).toBeTruthy("Name required error message shown");    
    expect( page.priceErrorElement().isPresent()).toBeTruthy("Price required error message shown");    
    expect( page.descriptionErrorElement().isPresent()).toBeFalsy("Description required error message shown");
    await page.closeButton().click();
  });

  it('should create a new product', async () => {
    await page.addButton().click();
    page.getInputField('name').sendKeys("Automation Product");  
    page.getInputField('price').sendKeys("167");
    page.getTextareaField('description').sendKeys("Automation Description");  
    await page.saveButton().click();
    expect( await page.getProductName().isPresent()).toBeTruthy("New product created"); 
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
