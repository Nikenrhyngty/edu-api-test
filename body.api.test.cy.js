describe('Validate body', () => { 
it('Sucessfully validate body content type', () => {
    cy.request('GET', 'https://pokeapi.co/api/v2/pokemon/ditto')
    .then((response) => {
        expect(response.status).to.equal(200)
        expect(response.body).to.have.property("name", "ditto")
        expect(response).to.have.property('headers')
        expect(response).to.have.property('duration')
    })
})
    
}) 