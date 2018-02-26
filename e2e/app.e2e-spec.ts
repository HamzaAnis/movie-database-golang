import { AngularProjectPage } from './app.po';

describe('angular-project App', function() {
  let page: AngularProjectPage;

  beforeEach(() => {
    page = new AngularProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
