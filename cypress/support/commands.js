Cypress.Commands.add('login', () => {
  cy.visit('https://demo.nopcommerce.com/login');
  cy.get('#Email').type('danielibisagio@gmail.com')
  cy.get('#Password').type('QualityMap123@')
  cy.get('form > .buttons > .button-1').click()
})
