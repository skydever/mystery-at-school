import { MysteryAtSchoolPage } from './app.po';

describe('mystery-at-school App', function() {
  let page: MysteryAtSchoolPage;

  beforeEach(() => {
    page = new MysteryAtSchoolPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
