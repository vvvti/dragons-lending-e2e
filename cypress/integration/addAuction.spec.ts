import {url, userEmail, password, firstName, lastName, userName} from '../helpers/consts';


it('logins checks account data and add an auction then logout', () => {
    
    cy.visit(url, {
        auth: {
            username: 'ersa',
            password: '7c8aq9dp',
        },
    })

    cy.get('[data-test-id="login-link"]').click();
    cy.get('[id="email"]').type(userEmail);
    cy.get('[id="password"]').type(password);
    cy.get('[data-test-id="login-button"]').click()
    cy.wait(600)
    cy.get('[data-test-id="auth-info"]').contains(userEmail)
    cy.get('[data-test-id="account-link"]').click()
    cy.wait(600)
    cy.get('[data-test-id="user-details"]').contains(firstName).contains(lastName)
    cy.get('[data-test-id="user-name"]').contains(userName)
    cy.get('[data-test-id="auctions-link"]').click();
    cy.get('[data-test-id="add-auction-button"]').click()
    cy.get('[id="loanAmount"]')
        .clear()
        .type('1800');
    cy.get('[id="timePeriod"]')
        .clear()
        .type('18');
    cy.get('[id="interestRate"]')
        .clear()
        .type('8')
    cy.get('[id="endDate"]')
        .clear()
        .type('2020-12-31')
    cy.get('[data-test-id="create-button"]').click()
    cy.wait(600)
    cy.get('[data-test-id="account-link"]').click()
    cy.wait(600)
    cy.get('[data-test-id="logout-button"]').click()
    cy.get('[data-test-id="login-link"]').contains('login')
});
