/// <Reference types= "cypress"/>
describe("Automating Book Store API Interception", () => {
  it("should intercept and verify the API response", () => {

    // Visit the URL
    cy.visit("https://demoqa.com/");

    // Click on Book Store 
    cy.contains("Book Store Application").click();

    // Click on Book Store Tab
    cy.contains("Book Store").click();

    // Click on the Understanding ECMAScript 6 book
    cy.contains("Understanding ECMAScript 6").click();

    // Intercept the API request and verify the response
    cy.request('Get', 'https://demoqa.com/BookStore/v1/Book?ISBN=9781593277574 ').as('bookRequest');
    cy.get('@bookRequest').then(response => {
      expect(response.status).to.eq(200);
      expect(response.body).to.deep.equal({
        isbn: "9781593277574",
        title: "Understanding ECMAScript 6",
        subTitle: "The Definitive Guide for JavaScript Developers",
        author: "Nicholas C. Zakas",
        publish_date: "2016-09-03T00:00:00.000Z",
        publisher: "No Starch Press",
        pages: 352,
        description:
          "ECMAScript 6 represents the biggest update to the core of JavaScript in the history of the language. In Understanding ECMAScript 6, expert developer Nicholas C. Zakas provides a complete guide to the object types, syntax, and other exciting changes that E",
        website: "https://leanpub.com/understandinges6/read",
      });

      // Verify response
      expect(response.body).to.have.property('isbn', '9781593277574')
      expect(response.body).to.have.property('title', 'Understanding ECMAScript 6')
      expect(response.body).to.have.property('subTitle', 'The Definitive Guide for JavaScript Developers')
      expect(response.body).to.have.property('author', 'Nicholas C. Zakas')
      expect(response.body).to.have.property('publish_date', '2016-09-03T00:00:00.000Z');
      expect(response.body).to.have.property('publisher', 'No Starch Press');
      expect(response.body).to.have.property('pages', 352);
      expect(response.body).to.have.property('description',
        'ECMAScript 6 represents the biggest update to the core of JavaScript in the history of the language. In Understanding ECMAScript 6, expert developer Nicholas C. Zakas provides a complete guide to the object types, syntax, and other exciting changes that E');
      expect(response.body).to.have.property('website', 'https://leanpub.com/understandinges6/read');






    });



  });
});
