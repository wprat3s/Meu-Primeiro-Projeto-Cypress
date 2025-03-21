///<reference types="Cypress"/>


describe('Testes Funcional de finança - Dev finance', () => {
    it('O usuário deve acessar o site e realizar o login com sucesso', ()=> {
        cy.visit('https://dev-finance.netlify.app/')
        cy.get('#transaction > .button').click()
        cy.get('#form > h2').should('contain','Nova Transação')
        cy.get('#description').type("Estacionamento")
        cy.get('#amount').type('25.90')
        cy.get('#date').type('2025-02-21')
        cy.get('button').click()
    })
    
});