describe('Get API Test', () => {
    it('GET API', () => {
        cy.request('GET', 'https://swapi.dev/api/films/1/').then((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
            expect(response.body).to.have.property('title')
            expect(response.body.title).to.equal('A New Hope')
        })
    })
})