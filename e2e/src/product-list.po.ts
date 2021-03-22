import { browser, by, element } from 'protractor';

export class ProductListPage {
  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl);
  }

  async isListPresent(): Promise<boolean> {
    return element(by.css('app-product-list ul')).isPresent();
  }
}
