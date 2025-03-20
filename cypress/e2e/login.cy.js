///<reference types="Cypress"/>


describe('Testes Funcional de login', () => {
    it('O usuário deve realizar o login com sucesso', ()=> {
        cy.visit("https://www.saucedemo.com/")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="title"]').should('contain','Products')
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.get('[data-test="checkout"]').click()
        cy.get('[data-test="title"]').should('contain','Checkout: Your Information')
        cy.get('[data-test="firstName"]').type("William")
        cy.get('[data-test="lastName"]').type("William")
        cy.get('[data-test="postalCode"]').type("0006155")
        cy.get('[data-test="continue"]').click()
        cy.get('[data-test="title"]').should('contain','Checkout: Overview')
        cy.get('[data-test="total-info-label"]').should('contain','Price Total')
        cy.get('[data-test="cancel"]').should('contain','Cancel')
        cy.get('[data-test="finish"]').should('contain','Finish')
        cy.get('[data-test="finish"]').click()
        cy.get('[data-test="title"]').should('contain','Checkout: Complete!')
        cy.get('[data-test="complete-header"]').should('contain','Thank you for your order!')
        cy.get('[data-test="complete-text"]').should('contain','Your order has been dispatched, and will arrive just as fast as the pony can get there!')
        cy.get('[data-test="back-to-products"]').should('contain','Back Home')
        cy.get('[data-test="back-to-products"]').click()
        cy.get('.bm-menu').should('contain','All Items')
        
    })
    
});