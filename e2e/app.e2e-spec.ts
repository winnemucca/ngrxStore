import { ChatrxPage } from './app.po';

describe('chatrx App', () => {
  let page: ChatrxPage;

  beforeEach(() => {
    page = new ChatrxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
