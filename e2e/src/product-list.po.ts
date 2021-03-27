import { browser, by, element } from 'protractor';

export class ProductListPage {
  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl);
  }

  async isListPresent(): Promise<boolean> {
    return element(by.css('app-product-list ul')).isPresent();
  }
  addButton() {
    return element(by.buttonText("Add"));
  }
  addModalElement() {
    return element(by.css(".add-product")).isPresent();
  }
  closeButton() {
    return element(by.buttonText("Close"));
  }
  saveButton() {
    return element(by.buttonText("Save"));
  }
  //Field Validation 
  nameErrorElement() {
    return element(by.cssContainingText(".invalid-feedback", "Name is required"));
  }
  priceErrorElement() {
    return element(by.cssContainingText(".invalid-feedback", "Price is required"));
  }
  descriptionErrorElement() {
    return element(by.cssContainingText(".invalid-feedback", "Description is required"));
  }
  
  //Form sve
  getInputField(formControl) {
    // return element(by.css(`.product_name`));
    return element(by.css(`input[formcontrolname="${formControl}"]`));
  }
  getTextareaField(formControl) {
    // return element(by.css(`.product_name`));
    return element(by.css(`textarea[formcontrolname="${formControl}"]`));
  }

  getProductName() {
    return element(by.cssContainingText(".product-name", "Automation Product"));
  }
}
