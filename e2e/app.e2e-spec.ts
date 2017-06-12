import { HiremePage } from './app.po';

describe('hireme App', () => {
  let page: HiremePage;

  beforeEach(() => {
    page = new HiremePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
