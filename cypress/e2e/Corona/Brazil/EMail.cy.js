////<reference types="cypress"/>

describe("Acessar E-mail do Google", () => {
    before(() => {
        cy.viewport(1920, 1080)
        cy.visit('https://mail.google.com')
        cy.wait(500)
    })

    Cypress.on('uncaught:exception', (err, runnable) => {
        if (err.message.includes('li')) {
            return false
        }
    })
    describe('Login no Google', () => {
        it('Acessar e-mail do Google', () => {
            cy.get('#identifierId').type('node.cir@gmail.com') //({force:true}) 
            cy.get('#identifierNext > .VfPpkd-dgl2Hf-ppHlrf-sM5MNb > .VfPpkd-LgbsSe > .VfPpkd-vQzf8d').click()
            //cy.get('#identifierNext > .VfPpkd-dgl2Hf-ppHlrf-sM5MNb > .VfPpkd-LgbsSe > .VfPpkd-RLmnJb').click({force:true})

            //.should('contain', 'Beba com moderação. Não compartilhe esse conteúdo com menores de idade.')
          //  cy.get('#age-gate--yes').click({force:true}) // Clicar no "SIM" no age gate
            //cy.get('#onetrust-accept-btn-handler').click({force:true}) 
            // assert the element's text content is exactly the given text
            //cy.get('#fwc22-age-gate > div > div.coh-container.footer-secondary-font.coh-ce-cpt_fwc22_age_gate-2b1d158a > div > div > div.coh-column.coh-ce-cpt_fwc22_age_gate-4ae06cb9.coh-visible-xs.coh-col-xs-12.coh-visible-md.coh-col-md-4 > div.coh-container.coh-ce-cpt_fwc22_age_gate-e84d1b23 > p.coh-paragraph.ENJOY.RESPONSIBLY\..DO.NOT.SHARE.THIS.CONTENT.WITH.MINORS\..ssa-instance-fbd96887-21dc-4776-93f4-fe1f93bd4410.coh-ce-cpt_fwc22_age_gate-dc762981').should('have.text', 'Beba com moderação. Não compartilhe esse conteúdo com menores de idade.')

            //cy.get('coh-paragraph ENJOY RESPONSIBLY. DO NOT SHARE THIS CONTENT WITH MINORS. ssa-instance-fbd96887-21dc-4776-93f4-fe1f93bd4410 coh-ce-cpt_fwc22_age_gate-dc762981').should('have.text', 'Beba com moderação. Não compartilhe esse conteúdo com menores de idade.')
            //cy.get('.nav-logo-column > .coh-container > .coh-link > .coh-image').click()
        })
/*
        it('Politica de Privacidade', () => {
            cy.get('#age-gate--yes').click({force:true}) // Clicar no "SIM" no age gate

            cy.get('.container-menu-top > .ssa-component > .menu > :nth-child(1) > a').click({ force: true })
            cy.get('.coh-ce-cpt_footer_fwc-6e434d71').should('have.text','Participação válida para pessoas físicas, maiores de 18 anos, mediante cadastro no site www.corona.com/followthesunset entre 16/01 e 31/03/2023 (horário de Brasília), sendo limitada a trinta chances de obter um brinde e trinta números da sorte por CPF durante todo o período de participação. Guarde os comprovantes fiscais de compra cadastrados. Antes de participar, leia os Regulamentos no site. Certificados de Autorização SEAE/ME 04.025177/2023 e 05.025176/2023. *Premiação exclusiva para participantes com o ciclo de vacinação completo contra a COVID-19, sob pena de desclassificação.')
            //cy.get('.nav-logo-column > .coh-container > .coh-link > .coh-image').click()
        })



    /*    it('Consumo Responsavel', () => {
            //cy.get('#age-gate--yes').click({ force: true }) // Clicar no "SIM" no age gate
            cy.get('.container-menu-top > .ssa-component > .menu > :nth-child(2) > a').should("exist")
           /* cy.get('Elemento')
                .invoke('removeAttr', 'target')
            .click() */
        
            // cy.get('.container-menu-top > .ssa-component > .menu > :nth-child(2) > a').click({force:true})
                // .invoke('removeAttr', 'target')
                // .click({ force: true })
       /* }) 
         /*/

       /* it('Termos e Condições', () => {
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

 /*       it('Fale Conosco', () => {
            //cy.get('#age-gate--yes').click({ force: true }) // Clicar no "SIM" no age gate

           // cy.get('.container-menu-top > .ssa-component > .menu > :nth-child(6) > a').click({ force: true })
            cy.get('.container-menu-top > .ssa-component > .menu > :nth-child(6) > a').then (function(ln)
            {
            const url= ln.prop('href')
            cy.vist(url)
            })
            //cy.get('.nav-logo-column > .coh-container > .coh-link > .coh-image').click()

        })
*/


    })
})