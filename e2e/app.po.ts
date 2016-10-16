import { browser, element, by } from 'protractor';

export class SimscalePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('sim-root h1')).getText();
  }
}
