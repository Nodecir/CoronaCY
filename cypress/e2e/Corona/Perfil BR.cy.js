///<reference types="cypress"/>

describe('PERFIL BRASIL', () => {
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
    describe('login/log out', () => {
        it('A ferramenta deve realizar o login e logo depois realizar log out', () => {
            cy.get('#age-gate--yes').click() // Clicar no "SIM" no age gate

            cy.get('.coh-ce-cpt_header_hamburger_button_fwc-e6b7b2b3 > .login-header-link > .ssa-component > .coh-ce-cpt_button-a384e411 > .paragraph-container-horizontal-none > .coh-container > .coh-link').click()

            cy.get('#edit-email').type('rodrigo.ribeiro+brasil1@justdigital.com.br')
            cy.get('#edit-password').type('Teste123')
            cy.get('#edit-submit').click()
            cy.url().should('be.equal','https://coronacom.test-abinbev.acsitefactory.com/pt-br/followthesunset/minha-conta')

            cy.request({
                method: 'POST',
                url: 'https://coronacom.test-abinbev.acsitefactory.com/pt-br/followthesunset/user/sso/entrar', // baseUrl is prepend to URL
                // failOnStatusCode: false,
                form: true, // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
                body: {
                    email: 'rodrigo.ribeiro+brasil1@justdigital.com.br',
                    password: 'Teste123',
                },
            }).then(
                (response) => {
                    // response.body is automatically serialized into JSON
                    expect(response.status).to.eq(200) // true
                    expect(response).to.have.property('headers')
                    // expect(response.body).to.be.equal({password:'123Mudar#'})
                }
            )

            // cy.request({
            //     method: 'GET',
            //     url: 'https://coronacom.test-abinbev.acsitefactory.com/pt-br/sunsets23/minha-conta', // baseUrl is prepend to URL
            //     failOnStatusCode: false,
            //     form: true, // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
            //     body: {
            //         email: 'rodrigo.ribeiro+brasil1@justdigital.com.br',
            //         password: 'Teste123',
            //     },
            // }).then(
            //     (response) => {
            //         // response.body is automatically serialized into JSON
            //         expect(response.status).to.eq(200) // true
            //         expect(response).to.have.property('headers')
            //         // expect(response.body).to.be.equal({password:'123Mudar#'})
            //     }
            // )
            cy.get('.coh-ce-cpt_header_hamburger_button_fwc-e6b7b2b3 > .profile-header-link > .ssa-component > .coh-ce-cpt_button-a384e411 > .paragraph-container-horizontal-none > .coh-container > .coh-link').click()
            cy.url().should('be.equal','https://coronacom.test-abinbev.acsitefactory.com/pt-br/followthesunset/cupons')
            cy.get('.coh-ce-cpt_my_account_header-13188300').click()

            cy.url().should('be.equal','https://coronacom.test-abinbev.acsitefactory.com/pt-br/followthesunset')
        })
    })
})