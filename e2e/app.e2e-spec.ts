import { SimscalePage } from './app.po';

describe('simscale App', function() {
  let page: SimscalePage;

  beforeEach(() => {
    page = new SimscalePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('sim works!');
  });
});
