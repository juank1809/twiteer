import { tweetsData } from "../../src/tweetsData";

// Get first retweet by text;
// Click the retweet button
// Get all elements by the retweeted tweet text
// Assert that there are at least two elements
describe("Retweet a tweet", () => {
  it("Retweet first tweet", () => {
    const firstTweetText = tweetsData[0].message;
    cy.visit("/");
    cy.findAllByTitle(/retweet count/i)
      .first()
      .click();
    cy.findByText(/retweet/i).click();

    cy.findAllByText(firstTweetText).should("have.length.above", 1);
  });
});
