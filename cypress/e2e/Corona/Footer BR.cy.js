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
            cy.viewport(1920, 1080)
            cy.get('#age-gate--yes').click({force:true}) // Clicar no "SIM" no age gate

            cy.get('.container-menu-top > .ssa-component > .menu > :nth-child(1) > a').click({ force: true })
            cy.get('.coh-link > .coh-image').click() //volta para o menu para acessar o proximo link

            //termos e condições
            cy.get('.container-menu-top > .ssa-component > .menu > :nth-child(3) > a').click({ force: true })

            //regras
            cy.get('.container-menu-top > .ssa-component > .menu > :nth-child(4) > a').click({ force: true })

            //configurações dos cookies
            cy.get('.container-menu-top > .ssa-component > .menu > :nth-child(5) > a').click({ force: true })

            //fale conosco
            cy.get(':nth-child(6) > a').click({force:true})

            //consumo responsavel esperar deploy
            // cy.get('.container-menu-top > .ssa-component > .menu > :nth-child(2) > a').click()
            //     .invoke('removeAttr', 'target')
            //     .click({ force: true })


        })
    })
})