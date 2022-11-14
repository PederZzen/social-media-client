describe('Testing logout', () => {
    it('Tests that the logout button logs the user out when clicked', () => {
        cy.goToLoginForm();
        cy.typeLoginDetails();
        cy.get('.btn-outline-warning')
            .contains('Logout')
            .click()
            .wait(1000);
        cy.getLocalStorage('token').then((token) => {
            expect(token).to.be.null;
        });
    });
});