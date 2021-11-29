context('Testin in the uat env', () => {
    
    it('go to frontend and verify', () => {    
        cy.visit('https://uat.ordering-boafresh.ekbana.net/')
        .url()
        .should('eq','https://uat.ordering-boafresh.ekbana.net/')
    });
});