/// <Reference types= "cypress"/>
describe('Automating Practice Form', () => {
  it('should intercept and verify practice form', () => {
    cy.visit("https://demoqa.com/")         //Main demoqa.com.
    cy.contains("Forms").click();            // Tap on form
    cy.contains("Practice Form").click();     // Tap on practice form

    // Form Filling
    cy.get("#firstName").type("Cowlar");
    cy.get("#lastName").type("Developer");
    cy.get("#userEmail").type("qaengineer@cowlar.com");
    cy.get("[for='gender-radio-1']").click(); // Select Male
    cy.get("#userNumber").type("0123456789");
    // Date of Birth is kept default
    cy.get("#subjectsInput").type("Computer Science").type("{enter}");
    cy.get("[for='hobbies-checkbox-3']").click(); // Select Music
    cy.get("#currentAddress").type("Address 1");
    cy.get(':nth-child(4) > .group-header > .header-wrapper').click()
    cy.get("#state").click().type("NCR").click().type("{enter}")
    cy.wait(1000)
    cy.get("#city").click().type("Delhi").click().type("{enter}")

    // Click on the Submit button
    cy.get("#submit").click({ force: true });

    // Verify the information in the modal
    cy.get(".modal-content").should("contain.text", "Cowlar Developer");
    cy.get(".modal-content").should("contain.text", "qaengineer@cowlar.com");
    cy.get(".modal-content").should("contain.text", "Male");
    cy.get(".modal-content").should("contain.text", "0123456789");
    cy.get(".modal-content").should("contain.text", "Computer Science");
    cy.get(".modal-content").should("contain.text", "Music");
    cy.get(".modal-content").should("contain.text", "Address 1");
    cy.get(".modal-content").should("contain.text", "NCR Delhi");

    // Close the Modal
    cy.get('#example-modal-sizes-title-lg').should('contain', 'Thanks for submitting the form')
    cy.get("#closeLargeModal").click({ force: true });
  })
})




