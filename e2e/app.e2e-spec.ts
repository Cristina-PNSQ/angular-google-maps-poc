import { LostPropertyPage } from './app.po';

describe('lost-property App', function() {
  let page: LostPropertyPage;

  beforeEach(() => {
    page = new LostPropertyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
