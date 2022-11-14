import { login } from '../../src/js/api/index';
import { logout } from '../../src/js/api/index';
import { createPost } from '../../src/js/api/index';
import { deletePost } from '../../src/js/api/index';

import { email } from '../e2e/user.js';
import { password } from '../e2e/user.js';

Cypress.Commands.add('login', async (email, password) => {
  await login(email, password);
});

Cypress.Commands.add('logout', () => {
  logout();
});

Cypress.Commands.add('createItem', async (title, body, media, tags) => {
  let item = await createPost(title, body, media, tags);
  return item;
});

Cypress.Commands.add('deletePost', (id) => {
  deletePost(id);
});

Cypress.Commands.add('goToLoginForm', () => {
  cy.visit('/');
  cy.get('#registerForm button')
      .contains('Login')
      .wait(500)
      .click()
      .wait(500);
});

Cypress.Commands.add('typeLoginDetails', () => {
  cy.get('#loginEmail').type(email);
  cy.get('#loginPassword').type(password);
  cy.get('#loginForm button')
      .contains('Login')
      .click()
      .wait(500);
});
