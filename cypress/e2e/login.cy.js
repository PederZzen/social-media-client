/// <reference types="cypress" />

import { login } from '../../src/js/api/auth/login';

describe('Logging in', function () {
  const email = 'batman@noroff.no';
  const password = '11111111';

  context('cy.request', () => {
    it('Without authorization gets 401', () => {
      cy.requests(login.response).its('status').should('equal', 401);
    });
  });
});
