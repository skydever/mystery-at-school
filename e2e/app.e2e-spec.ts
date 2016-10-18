import { MysteryAtSchoolPage } from './app.po';

describe('mystery-at-school App', function() {
  let page: MysteryAtSchoolPage;

  beforeEach(() => {
    page = new MysteryAtSchoolPage();
  });

  it(`should display the title 'Mystery at school'`, () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Mystery at school');
  });
});
