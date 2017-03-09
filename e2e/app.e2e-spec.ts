import { BranewebbappPage } from './app.po';

describe('branewebbapp App', () => {
  let page: BranewebbappPage;

  beforeEach(() => {
    page = new BranewebbappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
