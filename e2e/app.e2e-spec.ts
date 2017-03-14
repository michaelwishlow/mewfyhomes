import { MewfyhomesPage } from './app.po';

describe('mewfyhomes App', function() {
  let page: MewfyhomesPage;

  beforeEach(() => {
    page = new MewfyhomesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
