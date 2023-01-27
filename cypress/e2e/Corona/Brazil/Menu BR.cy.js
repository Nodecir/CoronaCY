///<reference types="cypress"/>

describe('MENU BRASIL', () => {
    before(() => {
        cy.visit('https://coronacom20230112.abinbev.acsitefactory.com/pt-br/followthesunset')
        //cy.visit('https://coronacom.test-abinbev.acsitefactory.com/pt-br/sunsets23')
        cy.wait(500)
    })

    Cypress.on('uncaught:exception', (err, runnable) => {
        if (err.message.includes('li')) {
            return false
        }
    })
    describe('Links do Menu', () => {
        it('LOGIN', () => {
            cy.get('#onetrust-accept-btn-handler').click({force:true}) 
            cy.get('#age-gate--yes').click({ force: true })  // Clicar no "SIM" no age gate
            //cy.get('#onetrust-reject-all-handler').click({force: true}) // Rejeitar Cookies
            cy.get('.coh-ce-cpt_header_hamburger_button_fwc-e6b7b2b3 > .login-header-link > .ssa-component > .coh-ce-cpt_button-a384e411 > .paragraph-container-horizontal-none > .coh-container > .coh-link').click({ force: true })

            cy.get('#edit-email').type('rodrigo.ribeiro+brasil1@justdigital.com.br')
            cy.get('#edit-password').type('Teste123')
            cy.get('#edit-submit').click({ force: true })

            cy.get('.coh-col-xs-3 > .coh-container > .coh-button').click({ force: true })

        })

        it('SCAN A CORONA', () => {
            cy.get('#onetrust-accept-btn-handler').click({force:true}) 
            cy.get('.coh-col-xs-3 > .coh-container > .coh-button').click({ force: true })
            cy.get('#age-gate--yes').click({ force: true })
            cy.get('.bgc-not-diff > .coh-container > .coh-menu-list-container > :nth-child(1) > .coh-link').click({ force: true })
            cy.get('#edit-email').type('rodrigo.ribeiro+brasil1@justdigital.com.br')
            cy.get('#edit-password').type('Teste123')
            cy.get('#edit-submit').click({ force: true })

            cy.get('.coh-col-xs-3 > .coh-container > .coh-button').click({ force: true })
            cy.get('.bgc-not-diff > .coh-container > .coh-menu-list-container > :nth-child(1) > .coh-link').click({ force: true })
            cy.get('.modal-close-button > p').click({ force: true })
        })

        it('HOW TO PARTICIPATE', () => {
            cy.get('#onetrust-accept-btn-handler').click({force:true}) 
            cy.get('.coh-col-xs-3 > .coh-container > .coh-button').click({ force: true })
            cy.get('#age-gate--yes').click({ force: true })
            cy.get('.bgc-not-diff > .coh-container > .coh-menu-list-container > :nth-child(2) > .coh-link').click({ force: true })
            cy.get('#edit-email').type('rodrigo.ribeiro+brasil1@justdigital.com.br')
            cy.get('#edit-password').type('Teste123')
            cy.get('#edit-submit').click({ force: true })

             cy.get('.coh-col-xs-3 > .coh-container > .coh-button').click({ force: true })
            cy.get('.bgc-not-diff > .coh-container > .coh-menu-list-container > :nth-child(2) > .coh-link').click({ force: true })
            cy.get('.nav-logo-column > .coh-container > .coh-link > .coh-image').click({ force: true })

        })

        it('PRIZES', () => {
            cy.get('#onetrust-accept-btn-handler').click({force:true}) 
            cy.get('.coh-col-xs-3 > .coh-container > .coh-button').click({ force: true })
            cy.get('#age-gate--yes').click({ force: true })
            cy.get('.bgc-not-diff > .coh-container > .coh-menu-list-container > :nth-child(3) > .coh-link').click({ force: true })
            cy.get('.coh-col-xs-3 > .coh-container > .coh-button').click({ force: true })
            cy.get('.bgc-not-diff > .coh-container > .coh-menu-list-container > :nth-child(3) > .coh-link').click({ force: true })
            cy.get('.nav-logo-column > .coh-container > .coh-link > .coh-image').click({ force: true })
        })

        it('PEDIDO ZÉ DELIVERY', () => {
            cy.get('#onetrust-accept-btn-handler').click({force:true}) 
            cy.get('.coh-col-xs-3 > .coh-container > .coh-button').click({ force: true })
            cy.get('#age-gate--yes').click({ force: true })
            cy.get('.bgc-not-diff > .coh-container > .coh-menu-list-container > :nth-child(4) > .coh-link').click({ force: true })
            cy.get('#edit-email').type('rodrigo.ribeiro+brasil1@justdigital.com.br')
            cy.get('#edit-password').type('Teste123')
            cy.get('#edit-submit').click({ force: true })
    
            cy.get('.coh-col-xs-3 > .coh-container > .coh-button').click({ force: true })
            cy.get('.bgc-not-diff > .coh-container > .coh-menu-list-container > :nth-child(4) > .coh-link').click({ force: true })
            cy.get('.nav-logo-column > .coh-container > .coh-link > .coh-image').click({ force: true })
        })

  /*    Este Link não está disponível  
        it('SUNSET FESTIVAL', () => {
            cy.get('#age-gate--yes').click({ force: true })  // Clicar no "SIM" no age gate

            cy.get('.coh-col-xs-3 > .coh-container > .coh-button').click({ force: true })
            cy.get('.bgc-not-diff > .coh-container > .coh-menu-list-container > :nth-child(5) > .coh-link').click({ force: true })
            cy.get('.nav-logo-column > .coh-container > .coh-link > .coh-image').click({ force: true })
        })
        */
    })
})