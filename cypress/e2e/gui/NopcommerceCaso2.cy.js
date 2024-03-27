// Import the faker library for generating dynamic test data
import { faker } from '@faker-js/faker';


describe('Demo.nopcommerce', () => {

    beforeEach(() => {        
        cy.visit('/') 
    })

    it('Validação que as mensagens erro são apresentadas', () => {        
        cy.get('.ico-register').click()
        cy.get('#register-button').click();
        cy.contains('#FirstName-error', 'First name is required.').should('be.visible');
        cy.contains('#LastName-error', 'Last name is required.').should('be.visible');
        cy.contains('#Email-error', 'Email is required.').should('be.visible');
        cy.contains('#Password-error', 'Password is required.').should('be.visible');
        cy.contains('#ConfirmPassword-error', 'Password is required.').should('be.visible');


    })


    it('verifica mensagem de senha precisa ter mais que 6 caracters', () => {
        cy.get('.ico-register').click()
        cy.get('#Password').type('1').blur
        cy.get('#register-button').click();
        cy.contains('#Password-error', 'Password must meet the following rules:',
        'must have at least 6 characters').should('be.visible');
    })

    it('verifica mensagem que a confirmação da senha precisa ser igual a senha', () => {
        cy.get('.ico-register').click()        
        cy.get('#Password').type('QualityMap123@')
        cy.get('#ConfirmPassword').type('QualityMap123')
        cy.get('#register-button').click();
        cy.contains('#ConfirmPassword-error', 'The password and confirmation password do not match.').should('be.visible');
    })

 
  
    it('Validação que as mensagens de erro são compatíveis com os inputs desejados', () => {
        cy.get('.ico-register').click()
        cy.get('#FirstName').type('Danieli').clear().should['have.value', 'First name is required.']
        cy.get('#LastName').type('Bisagio').clear().should['have.value', 'Last name is required.']
        cy.get('#Email').type('danielibisagio@gmail.com').clear().should['have.value', 'Email is required.']
        cy.get('#Password').type('QualityMap123@').clear().should['have.value', 'Password is required.']
        cy.get('#ConfirmPassword').type('QualityMap123@').clear().should['have.value', 'Password is required.']
        cy.get('#register-button').click();
    })
  
  
    it('Commands dinâmicas', () => {        
        cy.get('.ico-register').click()
        cy.get('#FirstName').type(faker.internet.userName())
        cy.get('#LastName').type(faker.internet.userName())
        cy.get('#Email').type(faker.internet.email())
        cy.get('#Password').type(faker.internet.password())
        cy.get('#ConfirmPassword').type(faker.internet.password())
        cy.get('#register-button').click();
        cy.contains('#ConfirmPassword-error', 'The password and confirmation password do not match.').should('be.visible');
    
    })
  
  

  
  
  
  })   