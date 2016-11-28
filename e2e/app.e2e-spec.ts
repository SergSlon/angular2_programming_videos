import { ProgrammingVideoPage } from './app.po';

describe('programming-video App', function() {
  let page: ProgrammingVideoPage;

  beforeEach(() => {
    page = new ProgrammingVideoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
