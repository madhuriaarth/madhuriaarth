describe('My First Test', () => {
    it('Visits the ReactApp', () => {
      cy.visit('http://localhost:3000/')
    })
    it('checking the loading', () => {
        cy.contains('Loading...')
    })
   
    it('checking the Address', () => {
        cy.get('.listCards').click({ multiple: true })
        cy.get('.listCards').should('contain', 'userName: Leanne Graham').and('be.visible');
        cy.get('.listCards').should('contain', 'Address:').and('be.visible');
        // cy.get('.listCards').should('contain', 'street:').and('be.visible');
        // cy.get('.listCards').should('contain', 'Zipcode : 92998-3874').and('be.visible');
                    
    })
    it('checking the album data',()=>{
        cy.contains('Clickme!').click({multiple:true})
        cy.get('.listCard').should('contain', 'Albums : quidem molestiae enim').and('be.visible');
        // cy.get('.listCar').children().should('contain', 'view Album').and('be.visible');
        // cy.get('.btnBack').should('contain', 'Goto UserList').click()

    })
    it('checking the photo data', () => {
        cy.contains('albumClick').click({multiple:true})
    })
    it('checking the back to album button', () => {
        cy.contains('go to album').click()
    })
    it('checking the back to user button', () => {
        cy.contains('userClick').click()
    })
  })