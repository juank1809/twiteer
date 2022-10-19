describe("Favorite a tweet", () => {
  it("Favorite first tweet", () => {
    cy.visit("/");
    cy.findAllByTitle(/favorite count/i)
      .first()
      .click();
    cy.findAllByTitle(/favorite count/i)
      .first()
      .should("have.text", "4");
  });
});
