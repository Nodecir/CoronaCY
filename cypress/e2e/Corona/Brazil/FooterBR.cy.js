////<reference types="cypress"/>

describe("Acessar os links do footer", () => {
    before(() => {
        cy.viewport(1920, 1080)
        cy.visit('https://coronacom20230112.abinbev.acsitefactory.com/pt-br/followthesunset')
        cy.wait(500)
    })

    Cypress.on('uncaught:exception', (err, runnable) => {
        if (err.message.includes('li')) {
            return false
        }
    })
    describe('Links do Footer', () => {
        it('Politica de Privacidade', () => {
            //cy.get('#age-gate--yes').click({force:true}) // Clicar no "SIM" no age gate

            cy.get('.container-menu-top > .ssa-component > .menu > :nth-child(1) > a').click({ force: true })
            //cy.get('.nav-logo-column > .coh-container > .coh-link > .coh-image').click()
        })

        it('Consumo Responsavel', () => {
            //cy.get('#age-gate--yes').click({ force: true }) // Clicar no "SIM" no age gate
            cy.get('.container-menu-top > .ssa-component > .menu > :nth-child(2) > a').should("exist")
           /* cy.get('Elemento')
                .invoke('removeAttr', 'target')
            .click() */
        
            // cy.get('.container-menu-top > .ssa-component > .menu > :nth-child(2) > a').click({force:true})
                // .invoke('removeAttr', 'target')
                // .click({ force: true })
        })

        it('Termos e Condições', () => {
            //cy.get('#age-gate--yes').click({ force: true }) // Clicar no "SIM" no age gate

            cy.get('.container-menu-top > .ssa-component > .menu > :nth-child(3) > a').click({ force: true })
           // cy.get('.nav-logo-column > .coh-container > .coh-link > .coh-image').click({ force: true })
        })

        it('Regras', () => {
            //cy.get('#age-gate--yes').click({ force: true }) // Clicar no "SIM" no age gate

            cy.get('.container-menu-top > .ssa-component > .menu > :nth-child(4) > a').click({ force: true })
            //cy.get(':nth-child(5) > [style="font-size:20px;"] > [style="font-family:Helvetica Neue;"] > [style="line-height:24px;"] > a').should("exist")

        })

        it('Configurações dos Cookies', () => {
            //cy.get('#age-gate--yes').click({ force: true }) // Clicar no "SIM" no age gate

            cy.get('.container-menu-top > .ssa-component > .menu > :nth-child(5) > a').click({ force: true })
            //cy.get('.nav-logo-column > .coh-container > .coh-link > .coh-image').click()

        })

        it('Fale Conosco', () => {
            //cy.get('#age-gate--yes').click({ force: true }) // Clicar no "SIM" no age gate

           // cy.get('.container-menu-top > .ssa-component > .menu > :nth-child(6) > a').click({ force: true })
            cy.get('.container-menu-top > .ssa-component > .menu > :nth-child(6) > a').then (function(ln)
            {
            const url= ln.prop('href')
            cy.vist(url)
            })
            //cy.get('.nav-logo-column > .coh-container > .coh-link > .coh-image').click()

        })



    })
})