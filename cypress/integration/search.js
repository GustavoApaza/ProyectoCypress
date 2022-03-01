describe('Search elements', () => {
    beforeEach(() => {
        cy.visit('/')//La barra '/' toma por defecto lo que esta en el archivo cypress.json (baseUrl...)
    })
    it('Search for elments with multiple results', () => {
        cy.search('dress');
        cy.fixture('searchResult').then((searchResult) => {
            cy.get(searchResult.title).should('contain', '"dress"');
        })
    })
    it('Search for elments with no results', () => {
        cy.search('kiwi');
        cy.fixture('searchResult').then((searchResult) => {
            cy.get(searchResult.aviso).should('contain', 'No results were found for your search');
        })
    })
})