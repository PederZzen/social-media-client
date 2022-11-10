import { email } from './user.js';
import { password } from './user.js';

describe('Log in', () => {
  it('Checks if the token is valid', () => {
    cy.visit('/');
    cy.get('#registerName').type(email);
    cy.getLocalStorage('token').then(($token) => {
      expect($token).to.equal($token);
    });
  });
});
