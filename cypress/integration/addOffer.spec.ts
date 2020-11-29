import {url, userEmail, password} from '../helpers/consts';


it('logins and adds new offer', () => {
    
    cy.visit(url, {
        auth: {
            username: 'ersa',
            password: '7c8aq9dp',
        },
    })

    cy.get('[data-test-id="login-link"]').click()
    cy.get('[id="email"]').type(userEmail);
    cy.get('[id="password"]').type(password);
    cy.get('[data-test-id="login-button"]').click()
    cy.wait(600)
    
    cy.get('[data-test-id="expand-invest"]:first').click()
    cy.get('[id="interestRate"]:first')
        .clear()
        .type('5');
    cy.get('[id="offerAmount"]:first')
        .clear()
        .type('1')
        cy.get('[data-test-id="invest-button"]:first').click() 
});
