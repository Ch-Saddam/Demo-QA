describe("Form test", () => {
  it("Can fill the form", () => {
    cy.visit( 'https://www.google.com/')
    // cy.get('.FPdoL > center > .RNmpXc',{timeout:8000}).click()
    cy.contains('Gmail').click()
    //cy.get('.header__aside__buttons > .button--medium').click()//

    
    })
  });


