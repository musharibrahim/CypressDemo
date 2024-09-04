///<reference types="cypress" />

it('Google Search',() => {

    cy.visit('https://www.google.com')
    cy.get('#APjFqb').type('SQA360{Enter}')
    cy.wait(2000),
    cy.contains('Videos',{timeout: 10000}).click(),
    cy.get('#APjFqb',{timeout:6000}).contains('SQA360'),
    cy.contains('SQA360')
})