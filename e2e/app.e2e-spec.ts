import { PokemonAppPage } from './app.po';

describe('pokemon-app App', () => {
  let page: PokemonAppPage;

  beforeEach(() => {
    page = new PokemonAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
