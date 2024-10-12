/// <reference types="cypress"/>

// Fucionalidade
describe('Buscar dispositivos', () => {

    // Cenário de teste 1
    it ('Buscar dispositivo especifico', () => {
        cy.request({
            method: 'GET',
             url: 'https://api.restful-api.dev/objects/1'

            })
            .then((response) =>{
                expect(response.status).to.equal(200)

            })
        })
    })

   

   