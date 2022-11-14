describe('Create item test', () => {
    it('Tests that the create item function validates inputs correctly based on API restrictions', () => {
        cy.goToLoginForm();
        cy.typeLoginDetails();

        cy.get('#footerActions > .btn-outline-success')
            .click();
        cy.get('#postTitle')
            .should('have.attr', 'required');
        cy.get('#postTitle')
            .type('Cypress test');
        cy.get('#postForm > .d-flex > .btn')
            .click()
            .wait(1000);
        cy.url().should('include', 'postId=');
        cy.get('.btn-danger')
            .contains('Delete')
            .click();
    });
});