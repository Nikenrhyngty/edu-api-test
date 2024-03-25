it('Add a new user', () => {
    var user = {
        "name": 'Fathur Rohim',
        "job": 'Test Engineer'
    }
cy.request('POST', 'https://reqres.in/api/users', { name: 'Fathur Rohim', job: 'Test Engineer'})
    .then((response) => {
    expect(response.status).equal(201)
    expect(response.body).to.have.property('name', 'Fathur Rohim')
    expect(response.body).to.have.property('job', 'Test Engineer')
    expect(response).to.have.property('headers')
    expect(response).to.have.property('duration')
})
})

