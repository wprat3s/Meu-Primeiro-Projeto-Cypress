///<reference types="Cypress"/>

describe('Testes Funcional - Gerador DEV4', () => {
    it('Acessar o site e solicitar para gerar CPF', () => {
        cy.visit('https://www.4devs.com.br/');
        cy.get('#top-nav > :nth-child(6) > a').click();
        cy.get('.app-title').should('contain', 'Gerador de CPF');
        cy.get(':nth-child(3) > label > .checkmark').click();
        cy.get('#bt_gerar_cpf').click();

        // Espera um pouco para garantir que o CPF seja gerado
        cy.wait(2000);

        // Captura o CPF corretamente
        cy.get('#texto_cpf').invoke('text').then((cpf) => {
            cy.log(`CPF capturado: ${cpf}`);
            console.log(`CPF capturado: ${cpf}`); // Log no console para depuração

            if (cpf && cpf.trim() !== '') {
                // Grava o CPF no arquivo .txt e .csv
                cy.writeFile('cypress/fixtures/CPF_gerado.txt', cpf + '\n', { flag: 'a+' });
                /* cy.writeFile('cypress/fixtures/cpfs.csv', cpf + '\n', { flag: 'a+' }); */
            } else {
                cy.log('⚠️ Erro: CPF não foi capturado corretamente!');
                console.error('⚠️ Erro: CPF não foi capturado corretamente!');
            }
        });
    });
});
