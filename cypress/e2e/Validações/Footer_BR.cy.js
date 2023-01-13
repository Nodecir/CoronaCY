///<reference types="cypress"/>

describe("Acessar os links do footer", () => {
    before(() => {
        cy.viewport(1920, 1080)
        cy.visit('https://coronacom.test-abinbev.acsitefactory.com/pt-br/sunsets23')
        cy.wait(500)
    })

    Cypress.on('uncaught:exception', (err, runnable) => {
        if (err.message.includes('li')) {
            return false
        }
    })
    describe('footer', () => {
        it('politica de privacidade', () => {
            cy.get('#age-gate--yes').click({force:true}) // Clicar no "SIM" no age gate

            cy.get('.container-menu-top > .ssa-component > .menu > :nth-child(1) > a').click({ force: true })
            cy.get('.nav-logo-column > .coh-container > .coh-link > .coh-image').click()
        })

        it('termos e condições', () => {
            //cy.get('#age-gate--yes').click({ force: true }) // Clicar no "SIM" no age gate

            cy.get('.container-menu-top > .ssa-component > .menu > :nth-child(3) > a').click({ force: true })
           // cy.get('.nav-logo-column > .coh-container > .coh-link > .coh-image').click({ force: true })
        })

        it('regras', () => {
            //cy.get('#age-gate--yes').click({ force: true }) // Clicar no "SIM" no age gate

            cy.get('.container-menu-top > .ssa-component > .menu > :nth-child(4) > a').click({ force: true })
            cy.get(':nth-child(5) > [style="font-size:20px;"] > [style="font-family:Helvetica Neue;"] > [style="line-height:24px;"] > a').click({force:true})

        })

        it('configurações dos cookies', () => {
            //cy.get('#age-gate--yes').click({ force: true }) // Clicar no "SIM" no age gate

            cy.get('.container-menu-top > .ssa-component > .menu > :nth-child(5) > a').click({ force: true })
            //cy.get('.nav-logo-column > .coh-container > .coh-link > .coh-image').click()

        })
        // ta quebrado 
       // it('consumo responsavel', () => {
           // cy.get('#age-gate--yes').click({ force: true }) // Clicar no "SIM" no age gate

           // cy.get('.container-menu-top > .ssa-component > .menu > :nth-child(2) > a').click({force:true})
                // .invoke('removeAttr', 'target')
                // .click({ force: true })
        //})
    })
})