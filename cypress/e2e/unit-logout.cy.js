import { email } from './user.js';
import { password } from './user.js';

describe('Test of logout function', () => {
  it('Tests if the logout function clears the token from browser storage', () => {
    cy.visit('/');
    cy.login(email, password);
    cy.logout();
    cy.getLocalStorage('token').then((token) => {
      expect(token).to.be.null;
    });
  });
});
