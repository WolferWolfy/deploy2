import { Deploy2Page } from './app.po';

describe('deploy2 App', function() {
  let page: Deploy2Page;

  beforeEach(() => {
    page = new Deploy2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
