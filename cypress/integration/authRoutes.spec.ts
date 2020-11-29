import {url} from '../helpers/consts';


it('try to login with inccorect credential, visit non existing route and try to acces user account, reviewing auctions in guest mode', () => {
    
    cy.visit(url, {
        auth: {
            username: 'ersa',
            password: '7c8aq9dp',
        },
    });

    cy.get('[data-test-id="login-link"]').click();
    cy.get('[id="email"]').type('fake@mail.com');
    cy.get('[id="password"]').type('fakepassword');
    cy.get('[data-test-id="login-button"]').click()
    cy.wait(600)
    cy.get('[data-test-id="error-message"]').contains('Please check your credentials')
    cy.visit('/fakeUrl')
    cy.get('[data-test-id="home-link"]').contains('home')
    cy.visit('/userAccount')
    cy.get('[data-test-id="unathorized-link"]').contains('login')
    // cy.get('[data-test-id="auctions-link"]').click();
    cy.visit('/auctions', {
        auth: {
            username: 'ersa',
            password: '7c8aq9dp',
        },
    });
    cy.wait(700)
    cy.get('[data-test-id="auction"]').contains('Expire on:')
});
