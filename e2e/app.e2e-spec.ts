import { Test1234Page } from './app.po';

describe('test1234 App', () => {
  let page: Test1234Page;

  beforeEach(() => {
    page = new Test1234Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
