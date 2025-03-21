///<reference types="Cypress"/>


describe('Testes Funcional Orange HRM', () => {
    it('O usuário deve acessar o site e realizar o login com sucesso', ()=> {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("TesteQA")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Teste@123')
        cy.get('.oxd-button').click()
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain','Dashboard')

    })
    
});