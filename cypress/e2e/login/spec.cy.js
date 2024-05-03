describe('SauceDemo Login Testing ', () => {
  it('passes', () => {
   
  })

  it('Succesful Login', () => {
    cy.get('#user-name').should('be.visible').and('exist').type('standard_user')
    cy.get('#password').should('be.visible').and('exist').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get ('.title').should('contain.text','Products' )
  })


  it('Invalid Email'), () =>{
    cy.get('#user-name').should('be.visible').and('exist').type('standard_use')
    cy.get('#password').should('be.visible').and('exist').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('h3[data-test="error"]').should('contain', 'Username and password do not match any user in this service')
  }


  it('Empty Email'), () =>{
    cy.get('#user-name').should('be.visible').and('exist').type('standard_use')
    cy.get('#password').should('be.visible').and('exist').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('h3[data-test="error"]').should('contain', 'Username and password do not match any user in this service')
  }
})