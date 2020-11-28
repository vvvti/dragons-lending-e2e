type Url = string;
it('logins and add an auction', () => {
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

    cy.get('[data-test-id="add-auction-button"]').click();
    cy.get('[id="loanAmount"]')
        .clear()
        .type('1800');
    cy.get('[id="timePeriod"]')
        .clear()
        .type('18');
    cy.get('[id="interestRate"]')
        .clear()
        .type('8');
    cy.get('[id="endDate"]')
        .clear()
        .type('2020-12-31');
    cy.get('[data-test-id="create-button"]').click();
});
