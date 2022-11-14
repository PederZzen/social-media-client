import { email } from './user.js';
import { password } from './user.js';

describe('Test of login validations', () => {
    it('Tests that the login button does not do anything without form-input', () => {
        cy.goToLoginForm();
        cy.get('#loginForm button')
            .contains('Login')
            .click();
        cy.url().should('not.include', '?view=profile');
    });

    it('Tests for invalid email', () => {
        cy.goToLoginForm();
        cy.get('#loginEmail').type('superman@noroff.no');
        cy.get('#loginPassword').type(password);
        cy.get('#loginForm button')
            .contains('Login')
            .click();
        cy.getLocalStorage('token').then((token) => {
            expect(token).to.be.null;
        });        
    });

    it('Tests for invalid password', () => {
        cy.goToLoginForm();
        cy.get('#loginEmail').type(email);
        cy.get('#loginPassword').type('2short');
        cy.get('#loginForm button')
        .contains('Login')
        .click();
        cy.getLocalStorage('token').then((token) => {
            expect(token).to.be.null;
        }); 
    });

    it('Tests for valid detalis', () => {
        cy.goToLoginForm();
        cy.typeLoginDetails();
        cy.getLocalStorage('token').then((token) => {
            expect(token).to.not.be.null;
        });        
    });
});