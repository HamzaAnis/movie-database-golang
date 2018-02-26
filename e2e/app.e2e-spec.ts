import { NGMoviesPage } from './app.po';

describe('ngmovies App', function() {
  let page: NGMoviesPage;

  beforeEach(() => {
    page = new NGMoviesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
