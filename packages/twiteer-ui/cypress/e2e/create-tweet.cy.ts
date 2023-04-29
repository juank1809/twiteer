describe("Create tweet", () => {
  it("create tweet from form", () => {
    const newTweetMarkup = {
      user: {
        fullName: "Christopher Francisco",
        username: "@christopher",
      },
      message: "This is a new tweet",
      favoriteCount: 0,
      retweetCount: 0,
      replyCount: 0,
      type: "default",
    } as const;

    cy.visit("/");
    cy.findByLabelText(/what are you thinking today/i).type(
      newTweetMarkup.message
    );

    cy.findByRole("button", { name: /tweet/i }).click({ force: true });

    cy.findByText(newTweetMarkup.message);
  });
});
