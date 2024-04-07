describe('Validate content', () => { 
    it('Sucessfully validate content type', () => {
        cy.request('GET','https://pokeapi.co/api/v2/pokemon/ditto')
        .should((response) => {
            expect(response.status).to.equal(200)
            expect(response.body.abilities[0].ability).to.not.be.null
            expect(response.body.abilities[0].ability).to.have.all.keys('name', 'url')
            expect(response.body.abilities[0].ability).to.have.property('name', 'limber')
            expect(response.body.abilities[0].ability).to.have.property('url', 'https://pokeapi.co/api/v2/ability/7/')
            
        })
    })
    
})

