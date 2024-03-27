///<reference types="Cypress"/>
       

describe('API - Teste funcional de Cadastro', () => {


  it('Metodo POST - Deve ser realizado o cadastro com sucesso', () => {
    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/usuarios',
      body:{
            "nome": "Fulano da Silva",
            "email": "fulanoteste1@qa.com.br",
            "password": "teste",
            "administrador": "true"
           }
	  });

  });


  it('Metodo PUT - Editar o ultimo usuario inserido', () => {
    cy.request({
      method: 'PUT',
      url: 'https://serverest.dev/usuarios/:_id',
      body:{
            "nome": "Fulano da Silva 2",
            "email": "testequalitymap2@qa.com.br",
            "password": "teste",
            "administrador": "true"
           }
	  });

  });


  it('Metodo GET - Listar todos os usuarios cadastrados', () => {
    cy.request({
      method: 'GET',
      url: 'https://serverest.dev//usuarios?administrador=true',     
	  });

  });



  it('busca usuários corretamente', () => {
    cy.request({
        method: 'GET',
        url: 'https://serverest.dev//usuarios?email=fulanoteste3@qa.com.br&administrador=true'
      }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body.usuarios[0]._id).to.not.be.null
        expect(response.body.usuarios[0].nome).to.not.be.null
        const respBody = expect(response.body.usuarios[0]._id).to.not.be.null

      })
  })


  it('Metodo DELETE - Deve ser realizado o cadastro com sucesso', () => {

    cy.request({
      method: 'DELETE',
      url: 'https://serverest.dev/usuarios/:_id',
      qs: {
        _id: 'XLyiKmUiQmkwtdiz'
      }
	  })        
    .should((response) => {
      expect(response.status).to.eq(200)
    });

  });




})