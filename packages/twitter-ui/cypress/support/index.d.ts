declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to select the first tweet by the testdata-id HTML attribute
     * @example cy.dataCy('greeting')
     */
    getFirstTweet(): Chainable<Element>;
  }
}
