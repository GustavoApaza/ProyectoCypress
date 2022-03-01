describe('Search elements', () => {
    beforeEach(() => {
        cy.visit('/')//La barra '/' toma por defecto lo que esta en el archivo cypress.json (baseUrl...)
    })
    it('Search for elments with multiple results', () => {
        cy.fixture('index').then((index) => {
            cy.get(index.searchBox).type('dress');
            cy.get(index.searchButton).click();
        })
        cy.fixture('searchResult').then((searchResult) => {
            cy.get(searchResult.title).should('contain', '"dress"');
        })
    })
    it('Search for elments with no results', () => {
        cy.fixture('index').then((index) => {
            cy.get(index.searchBox).type('apple');
            cy.get(index.searchButton).click();
        })
        cy.fixture('searchResult').then((searchResult) => {
            cy.get(searchResult.aviso).should('contain', 'No results were found for your search');
        })
    })
})