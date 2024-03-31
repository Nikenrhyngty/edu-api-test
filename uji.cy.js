it('Should', () => {
  cy.request({
      method: "POST",
      url: "https://reqres.in/api/users",
      body: {
          username: 'admin',
          password: 'admin'
      },
      headers: {
          authorization: 'Basic YWRtaW46YWRtaW4='
  
      },
  }).then((response) => {
    expect(response.status).equal(201)
    expect(response).to.have.property('headers')
    expect(response).to.have.property('duration')
  })
})