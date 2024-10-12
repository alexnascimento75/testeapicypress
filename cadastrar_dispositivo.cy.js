/// <reference types="cypress"/>

// Fucionalidade
describe('Cadastrar dispositivos', () => {

    // Cenário de teste 1
    it('Cadastrar dispositivo com sucesso', () => {
        cy.request({
            method: 'POST',
             url: 'https://api.restful-api.dev/objects',
             body: {
                "name": "Teste Alex",
                "data": {
                "year": 2024,
                "price": 10000,
                "CPU model": "batera sonor p400",
                "Hard disk size": "2 TB"
            }
             }

            })
            .then((response) =>{
                expect(response.status).to.equal(200)
                expect(response.body.name).to.equal("Teste Alex")
            })
        })
    })

   

   