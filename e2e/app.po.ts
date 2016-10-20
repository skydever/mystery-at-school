import { browser, element, by } from 'protractor';

export class MysteryAtSchoolPage {
  navigateTo() {
    return browser.get('/test');
  }

  getTitleText() {
    return element(by.id('title')).getText();
  }
}
