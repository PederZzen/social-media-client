import { email } from './user.js';
import { password } from './user.js';

describe('Test of login validation', () => {
    it('Tests if the login form validates user inputs correctly based on API restrictions', () => {
        cy.visit('/');
        cy.get('[data-cypress="loginButton1"]').click();
    });
});