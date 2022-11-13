import { email } from './user.js';
import { password } from './user.js';

describe('Test of login validations', () => {
    it('Tests if the login form validates user inputs correctly based on API restrictions', () => {
        cy.visit('/');
        cy.get('#registerForm button')
            .contains('Login')
            .wait(500)
            .click()
            .wait(500);
        cy.get('#loginEmail')
            .type('superman@noroff.no');
        cy.get('#loginPassword')
            .type(password);
        cy.get('#loginForm button')
            .contains('Login')
            .click();
        cy.getLocalStorage('token').then((token) => {
            expect(token).to.be.null;
        });        
    });
});