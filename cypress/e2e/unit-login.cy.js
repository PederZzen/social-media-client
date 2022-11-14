import { email } from './user.js';
import { password } from './user.js';

describe('Test of login function', () => {
  it('Tests if the login function returns a valid token', () => {
    cy.visit('/');
    cy.login(email, password);
    cy.getLocalStorage('token').then((token) => {
      expect(token).to.not.be.null;
    });
  });
});
