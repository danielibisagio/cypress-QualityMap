describe('Demo.nopcommerce/s', () => {
  beforeEach(() => {
    cy.visit('/')

  })

  it('Criação do registro com sucesso', () => {
    cy.get('.ico-register').click()
    cy.get('[type="radio"]').check('F')
    cy.get('#FirstName').type('Danieli')
    cy.get('#LastName').type('Bisagio')

    cy.get('[name="DateOfBirthDay"]').select('5')
    cy.get('[name="DateOfBirthMonth"]').select('June')
    cy.get('[name="DateOfBirthYear"]').select('1987')

    cy.get('#Email').type('danielibisagio@gmail.com')
    cy.get('#Company').type('QualityMap')

    cy.get('#Password').type('QualityMap123@')
    cy.get('#ConfirmPassword').type('QualityMap123@')

    cy.get('#register-button').click();
    cy.contains('Your registration completed').should('be.visible')
  })

  it('Validação que a data selecionada corresponde com o input desejado', () => {
    cy.get('.ico-login').click()
    cy.get('#Email').type('danielibisagio@gmail.com')
    cy.get('#Password').type('QualityMap123@')
    cy.get('form > .buttons > .button-1').click()
    cy.get('.ico-account').click();
    cy.get('[name="DateOfBirthDay"]').should('have.value', '5')
    cy.get('[name="DateOfBirthMonth"]').should('have.value', '6')
    cy.get('[name="DateOfBirthYear"]').should('have.value', '1987')   

  })

  it('Commands reutilizaveis - Função do Login', () => {
          cy.login()
          cy.get('#small-searchterms').type("HTC One Mini Blue");
          cy.get('#small-search-box-form > .button-1').click();
          cy.contains("HTC One Mini Blue").should('be.visible');   

  })


})
