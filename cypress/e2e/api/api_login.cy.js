
describe('API - Teste funcional de Cadastro de usuário', () => {

it('POST - listar os usuários', () => {
    cy.request({
        method: 'POST',
        url: 'https://serverest.dev/login',
        body: {
          "email": "fulano@qa.com",
          "password": "teste"
        }
      }).then((response) => {
        expect(response.status).to.equal(200);



      })
  })

})