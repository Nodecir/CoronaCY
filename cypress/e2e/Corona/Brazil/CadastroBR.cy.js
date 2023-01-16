///<reference types="cypress"/>

describe("Acessar o menu", () => {

    before(() => {
        cy.viewport(1920, 1080)
        //cy.visit('https://coronacom20230112.abinbev.acsitefactory.com/pt-br/followthesunset')
        cy.visit('https://coronacom.test-abinbev.acsitefactory.com/pt-br/sunsets23')
        cy.wait(500)
    })

    Cypress.on('uncaught:exception', (err, runnable) => {
        if (err.message.includes('li')) {
            return false
        }
    })

    describe('Cadastro', () => {
        it('Clicar para rejeitar os cookies e passar pelo age gate HOME', () => {
            Cypress.on('uncaught:exception', (err, runnable) => {
                return false;
              });
            cy.get('.country-selector-container > .coh-accordion-tabs > .coh-accordion-tabs-inner > .coh-accordion-tabs-content-wrapper > .coh-accordion-title > a').click({force:true})
            cy.get('[search="Brazil Portuguese BR"] > .country-selector-link').click({force:true})
            cy.get('#age-gate--yes').click() // Clicar no "SIM" no age gate
            cy.get('.coh-ce-cpt_header_hamburger_button_fwc-e6b7b2b3 > .login-header-link > .ssa-component > .coh-ce-cpt_button-a384e411 > .paragraph-container-horizontal-none > .coh-container > .coh-link').click({force:true})
        })
        it('Clicar abrir cadastro', () => {
        cy.get('.sso-login-bottom-actions > .coh-link').click({force:true})
        cy.get('#age-gate--yes').click() // Clicar no "SIM" no age gate
        cy.get('#edit-first-name').type('Felipe')
        cy.get('#edit-last-name').type('Bergamim')
        cy.get('#edit-email').type('felipe.bergamim@squadra.com.br')
        cy.get('#edit-password').type('Teste123')
        cy.get('#dd-sso').type('07')
        cy.get('#mm-sso').type('07')
        cy.get('#yyyy-sso').type('1999')
        cy.get('#edit-phonenumber-formatted').type('16 99999 9999')
        cy.get('#edit-document-number').type('41409478884')
        cy.get('#edit-city-state-administrative-area').select("São Paulo")
        cy.wait(1000)
        cy.get('#edit-city-state-locality--V_y4mvf-w8s').select("Campinas")
        cy.get('.js-form-item-terms-conditions > .option > p').click({force:true})
        cy.get('.js-form-item-regulations > .option > p').click({force:true})
        cy.get('.js-form-item-advertisement > .option > p').click({force:true})
        //cy.get('#edit-submit').click({force:true})
        })
    })
})