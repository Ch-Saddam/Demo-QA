/// <Reference types= "cypress"/>
describe('Demo-Qa', () => {
  it('practice form', () => {
    cy.visit("https://demoqa.com/")         //Main Url
    cy.log("Clicking on Forms button");
    cy.contains("Forms").click();            // Tap on form
    cy.contains("Practice Form").click();     // Tap on practice form


    // Fill out the form
    cy.get("#firstName").type("Cowlar");
    cy.get("#lastName").type("Developer");
    cy.get("#userEmail").type("qaengineer@cowlar.com");
    cy.get("[for='gender-radio-1']").click(); // Select Male
    cy.get("#userNumber").type("0123456789");
    // Date of Birth is kept default
    cy.get("#subjectsInput").type("Computer Science").type("{enter}");
    cy.get("[for='hobbies-checkbox-1']").click(); // Select Music
    cy.get("#currentAddress").type("Address 1");
    cy.get(':nth-child(4) > .group-header > .header-wrapper').click()
    cy.get("#state").type("NCR").type("{enter}");
    cy.wait(1000)
    //cy.get("#city").type("Delhi").type("{enter}")

    // Select the desired city from the dropdown (assuming there's a dropdown)
    //cy.get("#city").click(); 
    // Click on the Submit button

    //cy.get("#submit").click();

    cy.get("#submit").click({ force: true });

    // Verify the information in the modal
    cy.get(".modal").should("contain.text", "Cowlar Developer");
    cy.get(".modal").should("contain.text", "qaengineer@cowlar.com");
    cy.get(".modal").should("contain.text", "Male");
    cy.get(".modal-content").should("contain.text", "0123456789");
    cy.get(".modal-content").should("contain.text", "Computer Science");
    //cy.get(".modal-content").should("contain.text", "Music");
    cy.get(".modal-content").should("contain.text", "Address 1");
    //cy.get(".modal-content").should("contain.text", "NCR Delhi");

    // Close the Modal
    cy.get('#example-modal-sizes-title-lg').should('contain', 'Thanks for submitting the form')
    cy.get("#closeLargeModal").click({ force: true });
  })
})




