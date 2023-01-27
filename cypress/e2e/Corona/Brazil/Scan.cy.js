///<reference types="cypress"/>

describe("SCAN BRASIL", () => {

    before(() => {
        cy.visit('https://coronacom.test-abinbev.acsitefactory.com/pt-br/sunsets23')
        cy.wait(500)
    })

    Cypress.on('uncaught:exception', (err, runnable) => {
        if (err.message.includes('li')) {
            return false
        }
    })

    describe('SCAN', () => {
        it('Testar o scan', () => {
           // cy.get('.country-selector-container > .coh-accordion-tabs > .coh-accordion-tabs-inner > .coh-accordion-tabs-content-wrapper > .coh-accordion-title').select("Brazil Portuguese BR")//.select(" Argentina ") 
            //cy.get('[search="Argentina Spanish AR"]').select(" Argentina ")
            //.should('not.be.enabled').and('be.visible')
            // cy.get('.country-selector-container > .coh-accordion-tabs > .coh-accordion-tabs-inner > .coh-accordion-tabs-content-wrapper > .coh-accordion-title').click()
            // cy.get('[search="United States inglês US"]').click()
            // cy.wait(500)
            //cy.get('.country-selector-container > .coh-accordion-tabs > .coh-accordion-tabs-inner > .coh-accordion-tabs-content-wrapper > .coh-accordion-title').click()
            cy.wait(6500)
            cy.get('#age-gate--yes').click() // Clicar no "SIM" no age gate
            cy.get('.coh-col-xs-3 > .coh-container > .coh-button').click({ force: true })
            cy.get('.bgc-not-diff > .coh-container > .coh-menu-list-container > :nth-child(1) > .coh-link').click({ force: true })
            cy.get('#edit-email').type('rodrigo.ribeiro+brasil1@justdigital.com.br')
            cy.get('#edit-password').type('Teste123')
            cy.get('#edit-submit').click({ force: true })

            cy.get('.coh-col-xs-3 > .coh-container > .coh-button').click({ force: true })
            cy.get('.bgc-not-diff > .coh-container > .coh-menu-list-container > :nth-child(1) > .coh-link').click({ force: true })
            cy.viewport(414, 896)

            cy.get('.open-tutorial-button').click()
            cy.get('.next').click()
            cy.get('.next').click()
            cy.get('#modal-submit-button').click()
            cy.wait(5500)
            cy.get('.send-image').click({ force: true })
            cy.get('.c-flash-message__title').should('be.visible')
        })
    })
})