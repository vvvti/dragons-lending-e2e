import {url, userEmail, password, accountNumber} from '../helpers/consts';

it('logins, check user data then deposit and withdrawal money', () => {
    cy.visit(url, {
        auth: {
            username: 'ersa',
            password: '7c8aq9dp',
        },
    });
    cy.get('[data-test-id="login-link"]').click();
    cy.get('[id="email"]').type(userEmail);
    cy.get('[id="password"]').type(password);
    cy.get('[data-test-id="login-button"]').click()
    cy.wait(600)
    cy.get('[data-test-id="account-link"]').click();
    cy.get('[data-test-id="deposit-button"]').click();
    cy.get('[id="fromAccountNumber"]').type(accountNumber);
    cy.get('[id="amount"]').type('199');
    cy.get('[data-test-id="add-button"]').click();
    cy.wait(600)
    cy.get('[data-test-id="withdrawal-button"]').click();
    cy.get('[id="amount"]').type('199');
    cy.get('[id="requestedAccountNumber"]').type(accountNumber);
    cy.get('[data-test-id="substract-button"]').click();
});
