/// <Reference types= "cypress"/>
describe('Automating Practice Form', () => {
  it('should intercept and verify practice form', () => {
    cy.visit("https://demoqa.com/")         //Main demoqa.com.
    cy.contains("Forms").click();            // Tap on form
    cy.contains("Practice Form").click();     // Tap on practice form

    // Form Filling
const date = new Date('2023-09-12');


const options = {
  year: 'numeric',  
  month: 'long',    
  day: 'numeric',   
};


const formattedDate = date.toLocaleDateString('en-NZ', options);

    cy.get("#firstName").type("Cowlar");
    cy.get("#lastName").type("Developer");
    cy.get("#userEmail").type("qaengineer@cowlar.com");
    cy.get("[for='gender-radio-1']").click(); // Select Male
    cy.get("#userNumber").type("0123456789");
    // Date of Birth is kept default
    cy.get("#dateOfBirthInput").invoke("val").should("not.be.empty").then(defaultDate => {
      // Log the default date
      cy.log(`Default Date: ${defaultDate}`);
    });
    cy.get("#subjectsInput").type("Computer Science").type("{enter}");
    cy.get("[for='hobbies-checkbox-3']").click(); // Select Music
    cy.get("#currentAddress").type("Address 1");
    cy.get(':nth-child(4) > .group-header > .header-wrapper').click()
    cy.get("#state").click().type("NCR").click().type("{enter}")
    cy.wait(1000)
    cy.get("#city").click().type("Delhi").click().type("{enter}")

    // Click on the Submit button
    cy.get("#submit").then($button => {
      // Scroll to the button to make sure it's visible
      cy.wrap($button).scrollIntoView();
      $button[0].click();
    });

    // Verify the information in the modal
    cy.get(".modal-content").should("contain.text", "Cowlar Developer")
      .should("contain.text", "qaengineer@cowlar.com")
      .should("contain.text", "Male")
      .should("contain.text", "0123456789")
      .should("contain.text", formattedDate )
      .should("contain.text", "Computer Science")
      .should("contain.text", "Music")
      .should("contain.text", "Address 1")
      .should("contain.text", "NCR Delhi");

    // Close the Modal
    cy.get('#example-modal-sizes-title-lg').should('contain', 'Thanks for submitting the form')

    //cy.get("#closeLargeModal").scrollIntoView().click();
    cy.get("#closeLargeModal").then($button => {
      // Scroll to the button to make sure it's visible
      cy.wrap($button).scrollIntoView();

      // Trigger a click using JavaScript
      $button[0].click();

    })
  })
})



