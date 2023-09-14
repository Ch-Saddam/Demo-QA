it('Intercept by RouteMatcher ', () => {
  cy.visit("https://demoqa.com/");

  // Click on Book Store 
  cy.contains("Book Store Application").click();

  // Click on Book Store Tab
  cy.contains("Book Store").click();

  // Click on the Understanding ECMAScript 6 books
  cy.contains("Understanding ECMAScript 6").click();
  cy.intercept({
    method: 'GET',
    url: 'https://demoqa.com/BookStore/v1/Book?ISBN=9781593277574 '
  },
    (req) => {
      req.reply({
        body: {
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
        }
      })
    }).as('getdata')
  cy.visit('https://demoqa.com/books?book=9781593277574')
  cy.wait('@getdata')
  cy.get('@getdata').then((interception => {
    expect(interception.response.body).to.deep.equal({
      isbn: "9781593277574",
      title: "Understanding ECMAScript 6",
      subTitle: "The Definitive Guide for JavaScript Developers",
      author: "Nicholas C. Zakas",
      publish_date: "2016-09-03T00:00:00.000Z",
      publisher: "No Starch Press",
      pages: 352,
      description: "ECMAScript 6 represents the biggest update to the core of JavaScript in the history of the language. In Understanding ECMAScript 6, expert developer Nicholas C. Zakas provides a complete guide to the object types, syntax, and other exciting changes that E",
      website: "https://leanpub.com/understandinges6/read"
    });
  }))

})