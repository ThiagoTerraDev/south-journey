/// <reference types="cypress" />

describe('Teste de navegação no Header', () => {
    it('Carrega a página Home', () => {
        cy.visit('http://localhost:5173')
    })

    it('Carrega a página Sobre', () => {
        cy.visit('http://localhost:5173')
        cy.get('#menu > [href="/sobre"]').click()
        cy.url().should('include', '/sobre')
    })

    it('Carrega a página Home', () => {
        cy.visit('http://localhost:5173/sobre')
        cy.get('a[aria-label="South Journey - Home"]').click()
        cy.url().should('include', '/')
    })

    it('Carrega a página Termos e Condições', () => {
        cy.visit('http://localhost:5173')
        cy.get('#menu > [href="/termosecondicoes"]').click()
        cy.url().should('include', '/termosecondicoes')
    })
    
    it('Carrega a página Contato', () => {
        cy.visit('http://localhost:5173/termosecondicoes')
        cy.get('[href="/contato"]').click()
        cy.url().should('include', '/contato')
    })

    it('Voltar para a página Home', () => {
        cy.visit('http://localhost:5173/contato')
        cy.get('a[aria-label="South Journey - Home"]').click()
        cy.url().should('include', '/')
    })
});
