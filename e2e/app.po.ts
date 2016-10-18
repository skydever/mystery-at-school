import { browser, element, by } from 'protractor';

export class MysteryAtSchoolPage {
  navigateTo() {
    return browser.get('/');
  }

  getTitleText() {
    return element(by.id('title')).getText();
  }
}
