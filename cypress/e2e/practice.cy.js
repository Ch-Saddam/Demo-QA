/// <Reference types= "cypress"/>
describe("Automating Interactions Test", () => {
  it("should interact with the Resizable component", () => {

    // Step 1: Visit the URL and verify page title
    cy.visit("https://demoqa.com/");
    cy.title().should("include", "DEMOQA");

    // Step 2: Click on Interactions Card/Button
    cy.contains("Interactions").click();

    // Step 3: Verify Sidebar tabs
    cy.contains("Elements");
    cy.contains("Forms");
    cy.contains("Alerts, Frame & Windows");
    cy.contains("Widgets");
    cy.contains("Interactions");
    cy.contains("Book Store Application");

    // Step 4: Click on Resizable Tab
    cy.contains("Resizable").click();

    // Step 5: Verify "Resizable" is on top
    cy.get(".pattern-backgound.playgound-header").should("contain.text", "Resizable");

    // Step 6: Verify the current height and width of Box 1
    cy.get("#resizableBoxWithRestriction.box.react-resizable").should(($element) => {
      const height = $element[0].getBoundingClientRect().height;
      const width = $element[0].getBoundingClientRect().width;

      // Assertions on height and width
      expect(height).to.equal(200);
      expect(width).to.equal(200);
    });

    // Step 7: Resize Box 1 by dragging the bottom right corner
    cy.get(".react-resizable-handle.react-resizable-handle-se:eq(0)").should('be.visible')
      .first()
      .trigger("mousedown", { which: 1, })
      .trigger("mousemove", { clientX: 770, clientY: 500, })

    cy.get("#resizableBoxWithRestriction.box.react-resizable").should(($element) => {
      const height = $element[0].getBoundingClientRect().height;
      const width = $element[0].getBoundingClientRect().width;

      //Assertions on height and width
      expect(height).to.equal(300);
      expect(width).to.equal(500);
    });
    cy.wait(5000)

    // Step 7(a): Resize Box 1 by dragging the bottom right corner
    cy.get(".react-resizable-handle.react-resizable-handle-se:eq(0)").should('be.visible')
      .first()
      .trigger("mousemove", { clientX: 150, clientY: 150, force: true })
      .trigger("mouseup", { which: 1, force: true })
      
    // Verify Box 1 is resizable and meets the constraints
    cy.get("#resizableBoxWithRestriction.box.react-resizable").should(($element) => {
      const height = $element[0].getBoundingClientRect().height;
      const width = $element[0].getBoundingClientRect().width;

      // Assertions on height and width
      expect(height).to.equal(150);
      expect(width).to.equal(150);
    });

    // Verify Box 2 is resizable
    cy.get(".react-resizable-handle.react-resizable-handle-se:eq(1)").first().scrollIntoView().then(handle => {
      cy.wrap(handle)
      cy.document().trigger("mousemove", { client: 450, client: 750 });
      cy.document().trigger("mouseup", { which: 1 });
    });
  });
});
