type Url = string;
it('logins, check user data then deposit and withdrawal money', () => {
    // const url: Url = 'https://dragons-lending.ersa-team.sit.fintechchallenge.pl';
    const url: Url = 'localhost:3000';
    cy.visit(url, {
        auth: {
            username: 'ersa',
            password: '7c8aq9dp',
        },
    });
    cy.get('[data-test-id="login-link"]').click();
    cy.get('[id="email"]').type('lewandowski@gmail.com');
    cy.get('[id="password"]').type('lewandowski@2020');
    cy.get('[data-test-id="login-button"]').click();
    cy.get('[data-test-id="account-link"]').click();
    cy.get('[data-test-id="deposit-button"]').click();
    cy.get('[id="fromAccountNumber"]').type('34b511c8-5364-4c48-8f19-e3f7056e7273');
    cy.get('[id="amount"]').type('199');
    cy.get('[data-test-id="add-button"]').click();
    cy.get('[data-test-id="withdrawal-button"]').click();
    cy.get('[id="amount"]').type('199');
    cy.get('[id="requestedAccountNumber"]').type('34b511c8-5364-4c48-8f19-e3f7056e7273');
    cy.get('[data-test-id="substract-button"]').click();
});
