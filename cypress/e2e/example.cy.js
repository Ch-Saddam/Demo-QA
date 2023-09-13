
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
    cy.get("#resizableBoxWithRestriction.box.react-resizable").as("box1").should(($element) => {
        const height = $element[0].getBoundingClientRect().height;
        const width = $element[0].getBoundingClientRect().width;
  
        // Assertions on height and width
        expect(height).to.equal(200);
        expect(width).to.equal(200);
      });
  
      // Step 7: Resize Box 1 by dragging the bottom right corner
      
      // Find the resizable box element (you may need to adjust the selector)
     // cy.get(".react-resizable-handle.react-resizable-handle-se:eq(0)").as("box1");
  
      // Get the initial dimensions of Box 1
      cy.get("@box1").then(($box) => {
        const initialWidth = $box.width();
        const initialHeight = $box.height();
  
        // Resize Box 1 by dragging the bottom right corner
        cy.get("@box1")
          .trigger("mousedown") 
          .trigger("mousemove", { clientX: initialWidth - 50, clientY: initialHeight - 50 })
          .trigger("mouseup", { which: 1 });
  
        // Get the final dimensions of Box 1 after resizing
        cy.get("@box1").then(($resizedBox) => {
          const finalWidth = $resizedBox.width();
          const finalHeight = $resizedBox.height();
  
          // Verify resizing constraints
          expect(finalWidth).to.be.at.least(150); // Min-Width: 150
          expect(finalHeight).to.be.at.least(150); // Min-Height: 150

          cy.get("@box1").then(($box) => {
            const initialWidth = $box.width();
            const initialHeight = $box.height();

            cy.get("@box1")
          .trigger("mousedown", { which: 1 })
          .trigger("mousemove", { clientX: initialWidth + 300, clientY: initialHeight + 550 })
          .trigger("mouseup");
          cy.get("@box1").then(($resizedBox) => {
            const finalWidth = $resizedBox.width();
            const finalHeight = $resizedBox.height()
          expect(finalWidth).to.be.at.most(500); // Max-Width: 500
          expect(finalHeight).to.be.at.most(300); // Max-Height: 300
        });
      });
    });
  });
})})